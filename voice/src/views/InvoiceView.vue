<template>
  <v-container>
    <v-row>
      <v-col>
        <h4>Company Name</h4>
        <p>Street Address <br>City <br>Phone <br></p>
        <h6 style="background-color: lightblue; padding: 1rem; margin-top: 0.9rem; padding-left: 2rem; margin-right: 1rem;">Bill To</h6>
        <p>
          Name:<br />
          Company Name:<br />
          Street Address:<br />
          City:<br />
          Phone:<br />
          Email Address:<br />
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <h2>Invoice</h2>
        <h6 class="mt-5">
          <v-row>
            <v-col cols="6" class="light-blue" style="background-color: lightblue; padding: 1rem;">
              <span>INVOICE</span>
            </v-col>

            <v-col cols="6" class="light-blue" style="background-color: lightblue; padding: 1rem;">
              <span>DATE: {{ invoiceDate }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" class="light-blue" style=" padding: 1rem;">
              <span>001</span>
            </v-col>

            <v-col cols="6" class="light-blue" style=" padding: 1rem;">
              <span>14-05-2021</span>
            </v-col>
          </v-row>
        </h6>

        <h6 class="mt-5">
          <v-row>
            <v-col cols="6" class="light-blue" style="background-color: lightblue; padding: 1rem;">
              <span>CUSTOMER ID</span>
            </v-col>

            <v-col cols="6" class="light-blue" style="background-color: lightblue; padding: 1rem;">
              <span>TERMS {{ invoiceDate }}</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" class="light-blue" style=" padding: 1rem;">
              <span>C-001</span>
            </v-col>

            <v-col cols="6" class="light-blue" style=" padding: 1rem;">
              <span>Due Before Payment</span>
            </v-col>
          </v-row>
        </h6>
      </v-col>
    </v-row>

    <div v-for='(itemRow,i) in itemRows' :key="i">
      <v-row>
        <v-col cols="12" sm="5" md="5">
          <v-text-field
            label="Item"
            placeholder="Item"
            
            v-model="item[i]"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <v-text-field
            label="Price"
            placeholder="Price"
            type="text"
            v-model="price[i]"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <v-text-field
            label="Qty"
            placeholder="Qty"
            type="qty"
            v-model="qty[i]"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <v-text-field
            label="Total"
            placeholder="Total"
            v-model="total[i]"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="1" md="1">
          <v-col cols="auto">
            <v-icon :icon="`mdi-delete`" @click="removeItem(i)" color="red darken-1"></v-icon>
          </v-col>
          
        </v-col>
      </v-row>
    </div>
  

    <v-col cols="auto">
      <v-btn @click="additem" density="comfortable">Add Item +</v-btn>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data()  {
    return {
      itemRows: [], // Replace with your actual invoice date
      item: [],
      price: [],  
      qty: [],
      total: [],// Initialize email as an empty string
    };
  },

  methods:{
    additem(){
      this.itemRows.push({
        item:"",
        qty:"",
        price:"",
        total:""
      })
    }
  },
  removeItem(index){
      this.itemRows.splice(index,1);
  },
  creates(){
    this.additem();


  }
};
</script>
