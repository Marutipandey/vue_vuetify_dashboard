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
            <h2>
                Invoice
            </h2>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'InvoicE'
}
</script>
