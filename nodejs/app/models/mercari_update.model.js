module.exports = ( sequelize, Sequelize ) =>
{
  const mercariupdateList = sequelize.define( "mercari_updates", {
    user_id: { type: Sequelize.INTEGER },
    product_id: { type: Sequelize.STRING },
    snapshot_id: { type: Sequelize.STRING },
    image_n_1: { type: Sequelize.STRING },
    image_n_2: { type: Sequelize.STRING },
    image_n_3: { type: Sequelize.STRING },
    image_n_4: { type: Sequelize.STRING },
    image_n_5: { type: Sequelize.STRING },
    image_n_6: { type: Sequelize.STRING },
    image_n_7: { type: Sequelize.STRING },
    image_n_8: { type: Sequelize.STRING },
    image_n_9: { type: Sequelize.STRING },
    image_n_10: { type: Sequelize.STRING },
    image_u_1: { type: Sequelize.INTEGER },
    image_u_2: { type: Sequelize.INTEGER },
    image_u_3: { type: Sequelize.INTEGER },
    image_u_4: { type: Sequelize.INTEGER },
    image_u_5: { type: Sequelize.INTEGER },
    image_u_6: { type: Sequelize.INTEGER },
    image_u_7: { type: Sequelize.INTEGER },
    image_u_8: { type: Sequelize.INTEGER },
    image_u_9: { type: Sequelize.INTEGER },
    image_u_10: { type: Sequelize.INTEGER },
    image_r_1: { type: Sequelize.INTEGER },
    image_r_2: { type: Sequelize.INTEGER },
    image_r_3: { type: Sequelize.INTEGER },
    image_r_4: { type: Sequelize.INTEGER },
    image_r_5: { type: Sequelize.INTEGER },
    image_r_6: { type: Sequelize.INTEGER },
    image_r_7: { type: Sequelize.INTEGER },
    image_r_8: { type: Sequelize.INTEGER },
    image_r_9: { type: Sequelize.INTEGER },
    image_r_10: { type: Sequelize.INTEGER },
    product_name: { type: Sequelize.STRING },
    feature: { type: Sequelize.STRING },
    SKU1_id: { type: Sequelize.STRING },
    SKU2_id: { type: Sequelize.STRING },
    SKU3_id: { type: Sequelize.STRING },
    SKU4_id: { type: Sequelize.STRING },
    SKU5_id: { type: Sequelize.STRING },
    SKU6_id: { type: Sequelize.STRING },
    SKU7_id: { type: Sequelize.STRING },
    SKU8_id: { type: Sequelize.STRING },
    SKU9_id: { type: Sequelize.STRING },
    SKU10_id: { type: Sequelize.STRING },
    SKU1_Snapshot_id: { type: Sequelize.STRING },
    SKU2_Snapshot_id: { type: Sequelize.STRING },
    SKU3_Snapshot_id: { type: Sequelize.STRING },
    SKU4_Snapshot_id: { type: Sequelize.STRING },
    SKU5_Snapshot_id: { type: Sequelize.STRING },
    SKU6_Snapshot_id: { type: Sequelize.STRING },
    SKU7_Snapshot_id: { type: Sequelize.STRING },
    SKU8_Snapshot_id: { type: Sequelize.STRING },
    SKU9_Snapshot_id: { type: Sequelize.STRING },
    SKU10_Snapshot_id: { type: Sequelize.STRING },
    SKU1_Type: { type: Sequelize.STRING },
    SKU2_Type: { type: Sequelize.STRING },
    SKU3_Type: { type: Sequelize.STRING },
    SKU4_Type: { type: Sequelize.STRING },
    SKU5_Type: { type: Sequelize.STRING },
    SKU6_Type: { type: Sequelize.STRING },
    SKU7_Type: { type: Sequelize.STRING },
    SKU8_Type: { type: Sequelize.STRING },
    SKU9_Type: { type: Sequelize.STRING },
    SKU10_Type: { type: Sequelize.STRING },
    SKU1_current_inventory: { type: Sequelize.INTEGER },
    SKU2_current_inventory: { type: Sequelize.INTEGER },
    SKU3_current_inventory: { type: Sequelize.INTEGER },
    SKU4_current_inventory: { type: Sequelize.INTEGER },
    SKU5_current_inventory: { type: Sequelize.INTEGER },
    SKU6_current_inventory: { type: Sequelize.INTEGER },
    SKU7_current_inventory: { type: Sequelize.INTEGER },
    SKU8_current_inventory: { type: Sequelize.INTEGER },
    SKU9_current_inventory: { type: Sequelize.INTEGER },
    SKU10_current_inventory: { type: Sequelize.INTEGER },
    SKU1_increase: { type: Sequelize.INTEGER },
    SKU2_increase: { type: Sequelize.INTEGER },
    SKU3_increase: { type: Sequelize.INTEGER },
    SKU4_increase: { type: Sequelize.INTEGER },
    SKU5_increase: { type: Sequelize.INTEGER },
    SKU6_increase: { type: Sequelize.INTEGER },
    SKU7_increase: { type: Sequelize.INTEGER },
    SKU8_increase: { type: Sequelize.INTEGER },
    SKU9_increase: { type: Sequelize.INTEGER },
    SKU10_increase: { type: Sequelize.INTEGER },
    SKU1_stock_increase: { type: Sequelize.INTEGER },
    SKU2_stock_increase: { type: Sequelize.INTEGER },
    SKU3_stock_increase: { type: Sequelize.INTEGER },
    SKU4_stock_increase: { type: Sequelize.INTEGER },
    SKU5_stock_increase: { type: Sequelize.INTEGER },
    SKU6_stock_increase: { type: Sequelize.INTEGER },
    SKU7_stock_increase: { type: Sequelize.INTEGER },
    SKU8_stock_increase: { type: Sequelize.INTEGER },
    SKU9_stock_increase: { type: Sequelize.INTEGER },
    SKU10_stock_increase: { type: Sequelize.INTEGER },
    SKU1_product_management_code: { type: Sequelize.STRING },
    SKU2_product_management_code: { type: Sequelize.STRING },
    SKU3_product_management_code: { type: Sequelize.STRING },
    SKU4_product_management_code: { type: Sequelize.STRING },
    SKU5_product_management_code: { type: Sequelize.STRING },
    SKU6_product_management_code: { type: Sequelize.STRING },
    SKU7_product_management_code: { type: Sequelize.STRING },
    SKU8_product_management_code: { type: Sequelize.STRING },
    SKU9_product_management_code: { type: Sequelize.STRING },
    SKU10_product_management_code: { type: Sequelize.STRING },
    SKU1_JAN_code: { type: Sequelize.STRING },
    SKU2_JAN_code: { type: Sequelize.STRING },
    SKU3_JAN_code: { type: Sequelize.STRING },
    SKU4_JAN_code: { type: Sequelize.STRING },
    SKU5_JAN_code: { type: Sequelize.STRING },
    SKU6_JAN_code: { type: Sequelize.STRING },
    SKU7_JAN_code: { type: Sequelize.STRING },
    SKU8_JAN_code: { type: Sequelize.STRING },
    SKU9_JAN_code: { type: Sequelize.STRING },
    SKU10_JAN_code: { type: Sequelize.STRING },
    brand_id: { type: Sequelize.STRING },
    Selling_price: { type: Sequelize.INTEGER },
    category_id: { type: Sequelize.STRING },
    commodity: { type: Sequelize.INTEGER },
    Shipping_method: { type: Sequelize.INTEGER },
    region_origin: { type: Sequelize.STRING },
    days_ship: { type: Sequelize.INTEGER },
    product_status: { type: Sequelize.INTEGER },
    re_entry: { type: Sequelize.INTEGER },
    product_registration_time: { type: Sequelize.DATE },
    last_modified: { type: Sequelize.DATE },
    hash: { type: Sequelize.STRING },
    product_registration_price: { type: Sequelize.DATE },
  },
    {
      timestamps: false
    } );
  return mercariupdateList;
};