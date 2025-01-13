// Tạo 3 promise với thời gian xử lý khác nhau
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 thành công'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 thất bại'), 2000);  // Promise này thất bại
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 thành công'), 1500);
  });
  
  // Yêu cầu 2: Luôn chạy tất cả các promise, kể cả khi thất bại
  function handlePromisesUsingAllSettled() {
    Promise.allSettled([promise1, promise2, promise3])
      .then((results) => {
        console.log('Tất cả promise đã hoàn thành (bất kể thành công hay thất bại):');
        
        // Duyệt qua mỗi phần tử trong kết quả
        results.forEach(result => {
          if (result.status === 'fulfilled') {
            console.log(`Promise thành công với giá trị: ${result.value}`);
          } else if (result.status === 'rejected') {
            console.log(`Promise thất bại với lý do: ${result.reason}`);
          }
        });
      })
      .finally(() => {
        console.log('Hoàn thành tất cả promise, dù thành công hay thất bại.');
      });
  }
  
  // Gọi hàm yêu cầu 2
  handlePromisesUsingAllSettled();
  