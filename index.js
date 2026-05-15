import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import fs from "fs";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View Engine
app.set("view engine", "ejs");

// EJS Folder
app.set("views", path.join(__dirname, "views"));

// Static Folder
app.use(express.static("public"));

app.get("/generate-pdf", async (req, res) => {
  try {
    // Sample Invoice Data
    const invoiceData = {
      invoiceNumber: "INV-2026-1001",
      customerName: "Meet Ghodasara",
      email: "meet@example.com",
      city: "Ahmedabad",
      paymentMethod: "UPI",
      date: "12 May 2026",

      products: [
        {
          name: "Nike Air Max",
          qty: 1,
          price: 12999,
        },
        {
          name: "Smart Watch",
          qty: 2,
          price: 18998,
        },
        {
          name: "Wireless Earbuds",
          qty: 1,
          price: 5999,
        },
      ],

      subtotal: 37996,
      gst: 6839,
      total: 44835,
    };

    // Render EJS to HTML
    res.render(
      "invoice",
      {
        invoice: invoiceData,
      },
      async (err, html) => {
        if (err) {
          return res.status(500).send(err.message);
        }

        // Launch Browser
        const browser = await puppeteer.launch({
          headless: "new",
        });

        const page = await browser.newPage();

        // Set HTML
        await page.setContent(html, {
          waitUntil: "networkidle0",
        });

        // PDF Path
        const fileName = `invoice-${Math.floor(1000 + Math.random() * 9000)}.pdf`;
        const pdfPath = path.join(__dirname, fileName);

        // Generate PDF
        await page.pdf({
          path: pdfPath,
          format: "A4",
          printBackground: true,
        });

        await browser.close();

        // Send PDF
        // res.download(pdfPath);
        res.download(pdfPath, fileName, (err) => {
          if (err) {
            console.log("Download Error : ", err);
          }

          fs.unlink(pdfPath, (unlinkError) => {
            if (unlinkError) {
              console.log("Delete Error : ", unlinkError);
            } else {
              console.log("PDF file delete sucessfully.");
            }
          });
        });
      },
    );
  } catch (error) {
    console.log(error);

    res.status(500).send("Error generating PDF");
  }
});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});
