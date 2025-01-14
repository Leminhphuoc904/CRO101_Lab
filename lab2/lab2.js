// Dữ liệu đầu vào
const class1 = [
    {
      mssv: 'PS0000',
      name: 'Nguyen Van A',
      avgPoint: 8.9,
      avgTraningPoint: 7,
      status: 'pass',
    },
    {
      mssv: 'PS0001',
      name: 'Nguyen Van B',
      avgPoint: 4.9,
      avgTraningPoint: 10,
      status: 'pass',
    },
  ];
  
  const class2 = [
    {
      mssv: 'PS0002',
      name: 'Nguyen Van C',
      avgPoint: 4.9,
      avgTraningPoint: 10,
      status: 'failed',
    },
    {
      mssv: 'PS0003',
      name: 'Nguyen Van D',
      avgPoint: 10,
      avgTraningPoint: 10,
      status: 'pass',
    },
    {
      mssv: 'PS0004',
      name: 'Nguyen Van E',
      avgPoint: 10,
      avgTraningPoint: 2,
      status: 'pass',
    },
  ];
  
  // Gộp danh sách sinh viên từ các lớp
  const allStudents = class1.concat(class2);
  
  // Loại bỏ sinh viên có status là 'failed'
  const eligibleStudents = allStudents.filter(student => student.status === 'pass');
  
  // Sắp xếp danh sách theo điểm số trung bình (avgPoint) giảm dần
  const sortedByAvgPoint = [...eligibleStudents].sort((a, b) => b.avgPoint - a.avgPoint);
  
  // Sắp xếp danh sách theo điểm rèn luyện trung bình (avgTraningPoint) giảm dần
  const sortedByTrainingPoint = [...eligibleStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);
  
  // Lấy thông tin của Ong vàng (sinh viên có điểm số cao nhất)
  const topStudent = sortedByAvgPoint[0];
  
  // Kết quả đầu ra
  console.log("Danh sách sinh viên theo điểm số trung bình (giảm dần):");
  console.log(sortedByAvgPoint);
  
  console.log("\nDanh sách sinh viên theo điểm rèn luyện trung bình (giảm dần):");
  console.log(sortedByTrainingPoint);
  
  console.log("\nThông tin của Ong vàng:");
  console.log(topStudent);
  