import { Component, Input } from '@angular/core';
import { producto } from '../../interfaces/product.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  imports: [NgClass, NgIf, ProductDetailsComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    productos: producto[] = [
      { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, imagen : "https://m.media-amazon.com/images/I/816uW9q6BKS.jpg"},
      { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, imagen : "https://m.media-amazon.com/images/I/61aiFCe6PpL.jpg"},
      { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, imagen : "https://p2-ofp.static.pub/fes/cms/2023/02/22/pkhjbh23c7sjfxf76k6e6usevy3ixi851221.png"},
      { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, imagen : "https://m.media-amazon.com/images/I/71+qQN-3KvL.jpg"},
      { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, imagen : "https://shop.dupapier.com.mx/cdn/shop/files/TECLADO-REDRAGON-KUMARA-K552-RGB-RED-SWITCH-ALAMBRICO-NEGRO_T090-152_2.jpg?v=1720064971&width=1200"},
      { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, imagen : "https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22684fa72/mouse-inalambrico-usb-usb-c-con-bateria-recargable-800-1000-1200-1600-dpi.jpg"},
      { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, imagen : "https://http2.mlstatic.com/D_NQ_NP_666230-MPE49256125662_032022-O.webp"},
      { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, imagen : "https://http2.mlstatic.com/D_NQ_NP_996416-MLU73742464395_012024-O.webp"},
      { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, imagen : "https://m.media-amazon.com/images/I/71O-02eW61L._AC_UF894,1000_QL80_.jpg"},
      { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, imagen : "https://shuremx.vtexassets.com/arquivos/ids/157322/SM58-LC_03.jpg?v=637783148900130000"},
      { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, imagen : "https://papira.com.mx/cdn/shop/files/6ca49d716c38ad322a8db53b45646b21WhatsApp_Image_2024-06-05_at_125409_PM_1jpeg1002x1002_1024x.jpg?v=1737432737"},
      { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, imagen : "https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg"},
      { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, imagen : "https://upload.wikimedia.org/wikipedia/commons/3/34/Linksys-Wireless-G-Router.jpg"}, 
      { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, imagen : "https://m.media-amazon.com/images/I/61RVLvNTxnL._AC_UF894,1000_QL80_.jpg"},
      { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, imagen : "https://m.media-amazon.com/images/I/617N9LE+4YL.jpg"}
    ];
    
    isSelected : boolean = false;
  
    onSelected() : void {
      this.isSelected = !this.isSelected;
    }

    selectedProduct: producto | null = null;

    selectProducto(product: producto) {
      this.selectedProduct = product;
      console.log(this.selectedProduct.name);
    }
}
