import { createServer, Model } from "miragejs"


createServer({
  models: {
    products: Model,
  },

  seeds(server) {
    server.create("product", {
      id: 1,
      name: "Evade Pro Base Jersey",
      price: 215,
      img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ333_STBL_EvadeProBaseJersey_StoneBlue_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668029206&w=1920&q=100",
      img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ333_STBL_EvadeProBaseJersey_StoneBlue_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668029202&w=1920&q=100",
      category: "men",
      featured: true
    })
    server.create("product", {
      id: 2,
      name: "Evade Pro Base Jersey",
      price: 215.00,
      img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ334_LAVA_EvadeProBaseJersey_Lava_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668029203&w=1920&q=100",
      img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAJ334_LAVA_EvadeProBaseJersey_Lava_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668029204&w=1920&q=100",
      category: "men",
      featured: false
    })
    server.create("product", {
      id: 3,
      name: "Evade Pro Base LS Jersey",
      price: 225.00,
      img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAL157_UNIB_EvadeProBaseLSJersey_UniformBlue_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668029203&w=1920&q=100",
      img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAL157_UNIB_EvadeProBaseLSJersey_UniformBlue_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668029203&w=1920&q=100",
      category: "men",
      featured: false,
      quantity: 1
    })
    server.create("product", {
      id: 4,
      name: "Evade Pro Base LS Jersey",
      price: 225.00,
      img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FEvadeProBaseLSJersey_Land_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1660192763&w=1920&q=100",
      img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FEvadeProBaseLSJersey_Land_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1660192757&w=1920&q=100",
      category: "men",
      featured: true,
      quantity: 1

    })
    server.create("product", {
      id: 5,
      name: "Draft Team Vest",
      price: 155.00,
      img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FPrimeVest_Bamboo_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1664770221&w=1920&q=100",
      img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FPrimeVest_Bamboo_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1664770215&w=1920&q=100",
      category: "men",
      featured: false,
      quantity: 1

    })
    server.create("product", {
      id: 6,
      name: "Evade Pro Base Jersey",
      price: 215.00,
      img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FWomen_sEvadeProBaseJersey_Garden_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1661837993&w=1920&q=100",
      img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FWomen_sEvadeProBaseJersey_Garden_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1661837987&w=1920&q=100",
      category: "women",
      featured: true,
      quantity: 1

    })
    server.create("product", {
      id: 7,
      name: "Evade Pro Base Jersey",
      price: 215.00,
      img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-WAJ197_LTCRL_Women_sEvadeProBaseJersey_LightCoral_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668029201&w=1920&q=100",
      img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-WAJ197_LTCRL_Women_sEvadeProBaseJersey_LightCoral_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668029201&w=1920&q=100",
      category: "women",
      featured: false,
      quantity: 1

    })

  },

  routes() {
    this.namespace = "api"
    this.logging = false

    this.get("/products", (schema, request) => {
      // return new Response(400, {}, {error: "Error fetching data"})
      return schema.products.all()
    })

    // this.get("/vans/:id", (schema, request) => {
    //     const id = request.params.id
    //     return schema.vans.find(id)
    // })

    // this.get("/host/vans", (schema, request) => {
    //     // Hard-code the hostId for now
    //     return schema.vans.where({ hostId: "123" })
    // })

    // this.get("/host/vans/:id", (schema, request) => {
    //     // Hard-code the hostId for now
    //     const id = request.params.id
    //     return schema.vans.findBy({ id, hostId: "123" })
    // })
  }
})