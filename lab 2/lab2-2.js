// Dữ liệu đầu vào
const productArray = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ab', name: 'Sữa rửa mặt' },
    { code: 'null', name: 'null' },
    { code: 'null', name: '' },
  ];
  
  // Hàm chuyển đổi từ array sang object
  function convertArrayToObject(array) {
    // Lọc ra các sản phẩm hợp lệ (không có code null hoặc name rỗng)
    const validProducts = array.filter(
      product => product.code && product.name && product.name !== 'null' && product.name !== ''
    );
  
    // Chuyển đổi sang object
    const productObject = Object.fromEntries(
      validProducts.map(product => [product.code, product])
    );
  
    return productObject;
  }
  
  // Chuyển đổi và loại bỏ sản phẩm không hợp lệ
  let newData = convertArrayToObject(productArray);
  
  // Cập nhật tên sản phẩm có mã 'ab' thành 'Son môi' và 'Sữa rửa mặt'
  if (newData['ab']) {
    newData['ab'].name = 'Son môi';  // Cập nhật tên cho sản phẩm có mã 'ab'
  }
  
  // Kết quả đầu ra
  console.log("Dữ liệu sau khi cập nhật tên:");
  console.log(newData);
  
  // Kiểm tra sản phẩm theo mã (tối ưu tìm kiếm)
  const productCode = 'ab'; // Nhập mã sản phẩm cần tìm
  console.log(`\nSản phẩm có mã '${productCode}':`, newData[productCode] || 'Không tìm thấy!');
  