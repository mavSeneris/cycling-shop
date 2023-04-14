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
    server.create("product",
      {
        id: 8,
        name: "Evade Pro Base LS Jersey",
        price: 225.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FWOMEN_sEvadeLSjersey_Land_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1660196045&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FWOMEN_sEvadeLSjersey_Land_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1660196040&w=1920&q=100",
        category: "women",
        featured: false,
        quantity: 1

      }
    )
    server.create("product",
      {
        id: 9,
        name: "Training Bib 3.0",
        price: 265.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-WAB086_ERTRSN_Black_TrainingBib_Earth_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1667427478&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-WAB086_ERTRSN_Black_TrainingBib_Earth_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1667427479&w=1920&q=100",
        category: "women",
        featured: false,
        quantity: 1

      }
    )
    server.create("product",
      {
        id: 10,
        name: "Draft Team Vest",
        price: 155.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FWOMEN_sDraftVest_Otter_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1660196024&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FWOMEN_sDraftVest_Otter_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1660196019&w=1920&q=100",
        category: "women",
        featured: true,
        quantity: 1

      }
    )
    server.create("product",
      {
        id: 11,
        name: "Pro Race Mitt",
        price: 110.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS225_ARTEvade_Sock_Artichoke_PDP_HERO_01_DESKTOP_6a2aecc8-b1a9-41fc-926b-377ca83b0495.jpg%3Fv%3D1668029205&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MRM025_LTCRL_ProRaceMitts_LightCoral_PDP_SPECS_01_DESKTOP_VARIANT_02.jpg%3Fv%3D1668029205&w=1920&q=100",
        category: "accessories",
        featured: true,
        quantity: 1

      }
    )
    server.create("product",
      {
        id: 12,
        name: "Evolve Bottle",
        price: 28.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FEvolveBottle_Clear_Lava_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1659945961&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FEvolveBottle_Clear_Lava_PDP_SPECS_01_DESKTOP_VARIANT_02.jpg%3Fv%3D1659945961&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 13,
        name: "Training Sock",
        price: 30.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS201_WHT_TrainingSock_White_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1667427505&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS201_WHT_TrainingSock_White_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1667427505&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 14,
        name: "Division Sock",
        price: 30.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS213_LVA_DivisionSock_Lava_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668041761&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS213_LVA_DivisionSock_Lava_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668041761&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1

      }
    )
    server.create("product",
      {
        id: 15,
        name: "Evade Sock",
        price: 30.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS216_ART_EvadeSock_Artichoke_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668041554&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS216_ART_EvadeSock_Artichoke_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1668041554&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 16,
        name: "Division Sock",
        price: 30.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS211_STBL_DivisionSock_StoneBlue_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668041850&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAS211_STBL_DivisionSock_StoneBlue_PDP_SPECS_02_DESKTOP.jpg%3Fv%3D1668041850&w=1920&q=100",
        category: "accessories",
        featured: true,
        quantity: 1

      }
    )
    server.create("product",
      {
        id: 17,
        name: "Training Cap",
        price: 40.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC125_BLK_TrainingCap_Black_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1667427506&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC125_BLK_TrainingCap_Black_PDP_SPECS_02_DESKTOP.jpg%3Fv%3D1667427506&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 18,
        name: "Training Cap",
        price: 40.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC127_BIR_TrainingCap_Birch_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1667427480&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC127_BIR_TrainingCap_Birch_PDP_SPECS_02_DESKTOP.jpg%3Fv%3D1667427480&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 19,
        name: "Pro Race Mitt",
        price: 110.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FProRaceMitt_Otter_PDP_HERO_01_DESKTOP_54cd2a69-face-49a1-9254-d08db48128ab.jpg%3Fv%3D1664430185&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FProRaceMitt_Otter_PDP_SPECS_01_DESKTOP_VARIANT_02_1f19b4b7-7b14-4097-8c4b-6e66bcbc7634.jpg%3Fv%3D1664430186&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1,
      }
    )
    server.create("product",
      {
        id: 20,
        name: "Pro Race Mitt",
        price: 110.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMitt-ProRace-Navy-MRM010_maap-cycling-apparel_PDP_HERO_01_DESKTOP_d63e7252-63b8-4957-9005-2dd594e02f21.jpg%3Fv%3D1664430198&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMitt-ProRace-Navy-MRM010_PDP_SPECS_01_DESKTOP_VARIANT_02.jpg%3Fv%3D1664430181&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 21,
        name: "MAAV Tool Keg",
        price: 30.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAA124_BLK_MAAPToolKeg_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668392544&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAA124_BLK_MAAPToolKeg_PDP_SPECS_01_DESKTOP_VARIANT_02.jpg%3Fv%3D1668392544&w=1920&q=100",
        category: "accessories",
        featured: true,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 22,
        name: "MAAV Diner Mug",
        price: 40.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAM329_CRMWG_MAAPDinerMug_CreamWarmGrey_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1668570045&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAM329_CRMWG_MAAPDinerMug_CreamWarmGrey_PDP_SPECS_01_DESKTOP_VARIANT_02.jpg%3Fv%3D1668570045&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 23,
        name: "Adapt Cap",
        price: 40.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC134_UNIB_AdaptCap_UniformBlue_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1666417897&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC134_UNIB_AdaptCap_UniformBlue_PDP_SPECS_02_DESKTOP.jpg%3Fv%3D1666417897&w=1920&q=100",
        category: "accessories",
        featured: true,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 24,
        name: "Adapt Cap",
        price: 40.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC133_IND_AdaptCap_Indigo_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1666417895&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAC133_IND_AdaptCap_Indigo_PDP_SPECS_02_DESKTOP.jpg%3Fv%3D1666417895&w=1920&q=100",
        category: "accessories",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 25,
        name: "Team Bib Evo",
        price: 355.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMENSTeamBibEvoMAP-MAB110_BLKBLKBLACKBLACK_PDP_ADDITIONAL_IMAGES_01_DESKTOP.jpg%3Fv%3D1638765120&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMENSTeamBibEvoMAP-MAB110_BLKBLKBLACKBLACK_PDP_HERO_01_DESKTOP_40e46355-34d9-4850-ad68-0ed61d6237c0.jpg%3Fv%3D1638765120&w=1920&q=100",
        category: "men",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 26,
        name: "Training Bib 3.0",
        price: 295.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAB144_ETHBLU_Earth_Blue_TrainingBib3.0_EarthBlue_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1667427480&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAB144_ETHBLU_Earth_Blue_TrainingBib3.0_EarthBlue_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1667427480&w=1920&q=100",
        category: "men",
        featured: false,
        quantity: 1
      }
    )
    server.create("product",
      {
        id: 27,
        name: "Ellipse Team Bib Evo",
        price: 375.00,
        img1: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAB163_DKCRIM_Ellipse_20Team_20Bib_20Evo_20Short_Dark_20Crimson_PDP_SPECS_03_DESKTOP.jpg%3Fv%3D1675052856&w=1920&q=100",
        img2: "https://maap.cc/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0510%2F7809%2Fproducts%2FMAP-MAB163_DKCRIM_Ellipse_20Team_20Bib_20Evo_20Short_Dark_20Crimson_PDP_HERO_01_DESKTOP.jpg%3Fv%3D1675052856&w=1920&q=100",
        category: "men",
        featured: false,
        quantity: 1
      }
    )
  },

  routes() {
    this.namespace = "api"
    this.logging = false

    this.get("/products", (schema, request) => {
      // return new Response(400, {}, {error: "Error fetching data"})
      return schema.products.all()
    })

    this.get("/products/:id", (schema, request) => {
        const id = request.params.id
        return schema.vans.find(id)
    })

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