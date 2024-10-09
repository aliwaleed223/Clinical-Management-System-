import Storage from '../models/storage.js';

const storageController = {

  // Create a new product
  createProduct: async (req, res) => {
    try {
      const { 
        productName,
        purchaseDate,
        description,
        category, 
        quantity,
        barcode,
        productNumber,
        purchasePrice,
        sellingPrice,
        minimumSellingPrice,
        discount,
        discountType,
        finalPrice 
      } = req.body;


      // calculate the final price 
      let calculatedFinalPrice = finalPrice;
       if (!finalPrice) {
        if (discountType === "percentage") {
          calculatedFinalPrice = sellingPrice * (discount / 100);
         } else if (discountType === "fixed") {
          calculatedFinalPrice = sellingPrice - discount;
        }
      }


      const newProduct = new Storage({
        productName,
        purchaseDate,
        description,
        category, 
        quantity,
        productNumber,
        barcode,
        purchasePrice,
        sellingPrice,
        minimumSellingPrice,
        discount,
        discountType,
        finalPrice : calculatedFinalPrice
      });

      await newProduct.save();

      res.status(201).json(newProduct);  // Use newProduct, not product
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(400).send('Error creating product');
    }
  },

  // Fetch all products
  fetchAllProducts: async (req, res) => {
    try {
      const products = await Storage.find({});
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(400).send('Error fetching products');
    }
  },

  // Fetch a single product by ID
  fetchProductById: async (req, res) => {
    try {
      const product = await Storage.findById(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(400).send('Error fetching product');
    }
  },

  // Update a product by ID
  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Storage.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updatedProduct) {
        return res.status(404).send('Product not found');
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(400).send('Error updating product');
    }
  },

  // Delete a product by ID
  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await Storage.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).send('Product not found');
      }
      res.status(200).json(deletedProduct);
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(400).send('Error deleting product');
    }
  },

  searchProducts : async (req, res)=>{
      try {
        const { nameOrCode, productType, outOfStock } = req.query;

        // Building the query object
        let query = {};

        // Filter by name or code if provided
        if (nameOrCode) {
          query.$or = [
              { productName: { $regex: nameOrCode, $options: 'i' } }, // Case-insensitive partial match for product name
              { productNumber: nameOrCode } 
          ];
        }

        // Filter by product type if provided
        if (productType && productType !== 'All') {
            query.category = productType;
        }

        // Filter by stock availability (outOfStock = true means quantity is 0)
        if (outOfStock) {
            query.quantity = outOfStock === 'نافذ' ? { $eq: 0 } : { $gt: 0 };
        }

        // Execute the query
        const products = await Storage.find(query);

        // Return the filtered products
        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }


  }




};

export default storageController;


 