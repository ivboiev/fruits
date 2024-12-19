const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Frutas</h1>
      <ul>
        <li v-for="fruta in paginatedFruits" :key="fruta.id" >
          <img :src="fruta.imagen" :alt="fruta.fruta" width="100" height="100" />
          <div>
            <strong>{{ fruta.fruta }}</strong> ({{ fruta.precioKg.toLocaleString() }} precio por kilo)
            <br />
           
          </div>
        </li>
      </ul>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>


   
  `,
  data() {
    return {
      fruits: [
        { id: 1, fruta: "Manzana", precioKg: "2.50€", imagen: "img/apple.webp" },
        { id: 2, fruta: "Avocado", precioKg: "8€", imagen: "img/avocado.webp" },
        { id: 3, fruta: "Banana", precioKg: "2€", imagen: "img/banana.webp" },
        { id: 4, fruta: "Mora", precioKg: "9€", imagen: "img/blackberries.webp" },
        { id: 5, fruta: "Arándanos", precioKg: "7.60€", imagen: "img/blueberries.webp" },
        { id: 6, fruta: "Cereza", precioKg: "6.50€", imagen: "img/cherries.webp" },
        { id: 7, fruta: "Pomelo", precioKg: "2.50€", imagen: "img/grapefruit.webp" },
        { id: 8, fruta: "Uva", precioKg: "6.50€", imagen: "img/grapes.webp" },
        { id: 9, fruta: "Kiwi", precioKg: "4.75€", imagen: "img/kiwi.webp" },
        { id: 10, fruta: "Naranja", precioKg: "2€", imagen: "img/orange.webp" },
        { id: 11, fruta: "Melocón", precioKg: "3.25€", imagen: "img/peach.webp" },
        { id: 12, fruta: "Pera", precioKg: "2.75€", imagen: "img/pears.webp" },
        { id: 13, fruta: "Ciruelas", precioKg: "2.25€", imagen: "img/plums.webp" },
        { id: 14, fruta: "Grandas", precioKg: "7€", imagen: "img/pomegranates.webp" },
        { id: 15, fruta: "Fresa", precioKg: "7.25€", imagen: "img/strawberries.webp" },
        
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.cities.length / this.itemsPerPage);
    },
    paginatedFruits() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.cities.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');

    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
