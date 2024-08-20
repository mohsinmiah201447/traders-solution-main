import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoiceData: any = {};
  currentDate: string = new Date().toLocaleDateString();  
  invoiceItems: any[] = [];

  ngOnInit() {
    const data = sessionStorage.getItem('invoiceData');
    if (data) {
      this.invoiceData = JSON.parse(data);
      sessionStorage.removeItem('invoiceData');
    }
    this.invoiceItems = this.invoiceData.orderItems;
  }

  downloadPDF() {
    const element = document.getElementById('invoiceWrapper');
    const downloadButton = document.getElementById('downloadButton');
    
    if (element && downloadButton) {
      downloadButton.style.display = 'none';

      html2canvas(element).then((canvas: HTMLCanvasElement) => {
        const imgWidth = 208;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        pdf.addImage(contentDataURL, 'PNG', 0, 10, imgWidth, imgHeight);
        pdf.save('invoice.pdf');

        downloadButton.style.display = 'block';
      }).catch(error => {
        console.error('Error generating canvas or PDF:', error);
        downloadButton.style.display = 'block';
      });
    } else {
      console.error('Element not found: invoiceWrapper or downloadButton');
    }
  }

}
