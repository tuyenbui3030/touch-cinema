"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    const data = [
      {
        unsignedName: "trang-ti",
        name: "Trạng tí",
        openingDay: "2021-4-30",
        poster: "trang-ti-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=l2XBzUZidig",
        description:
          "Trạng Tí Phiêu Lưu Kí 2 là chuyến phiêu lưu vượt ngoài trí tưởng tượng của bộ tứ Tí - Sửu - Dần - Mẹo khi phải cùng nhau vượt qua rất nhiều thử thách để khám phá bí ẩn về cha Tí. Truyền thuyết Hai Hậu sinh ra Tí vì tựa vào cục đá nghe thật khó tin, nên Tí trở thành tâm điểm chọc phá và coi thường bởi những người xấu tính trong làng. Trên hành trình, bốn đứa trẻ nhiều lần gặp rắc rối, hiểu lầm, tai nạn. Và bất ngờ, bốn đứa trẻ lại bị sơn tặc bắt cóc và bị ép đối đầu trước một âm mưu không thể lường trước được. Nhưng, nhờ những trải nghiệm và có bạn bè bên cạnh những lúc khó khăn đó, Tí dần hoàn thiện tính cách bản thân, bớt háo thắng và biết quan tâm đến người khác, hiểu rằng, cái lý đôi khi không quan trọng bằng cái tình mà con người ta dành cho nhau.",
        time: 120,
        sold: 100,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "thien-than-ho-menh",
        name: "Thiên thần hộ mệnh",
        openingDay: "2021-4-22",
        poster: "thien-than-ho-menh-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=1H-2FeFOM08",
        description:
          "Là một bộ phim của Victor Vũ được đầu tư chỉnh chu đến từng góc quay, nhân vật, trag phục. Nhạc phim hay 1 bộ phim mà đến mấy ca khuc và cả mv, cảnh quay đẳng cấp thác loạn giới ăn chơi con chủ tịch, diễn viên đẹp,.",
        time: 150,
        sold: 101,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "ban-tay-diet-quy",
        name: "Bàn tay diệt quỷ",
        openingDay: "2021-8-22",
        poster: "ban-tay-diet-quy-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=uqJ9u7GSaYM",
        description:
          "Võ sĩ MMA Yong Hoo (Park Seo Joon) đi theo con đường trừ tà trục quỷ sau khi bỗng dưng sở hữu Bàn tay diệt quỷ. Đối đầu với anh là Giám mục bóng tối - tên quỷ Satan đội lốt người. Dần dần, sự thật về cái chết của cha Yong Hoo và nguyên nhân anh trở thành người được chọn được hé lộ.",
        time: 150,
        sold: 90,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "nguoi-nhan-ban",
        name: "Người nhân bản",
        openingDay: "2021-6-20",
        poster: "nguoi-nhan-ban-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=JNZv1SgHv68",
        description:
          "Phim thực sự hay. Xem xong phải khiến ta suy ngẫm lại về sự sống, bất tử, và cái chết. Cái chết chính là lí do để ta sống một cách tốt đẹp hơn. Bộ phim mang lại quá nhiều cảm xúc cho người xem, hãy cùng chờ đón nó...",
        time: 150,
        sold: 10,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "ho-dia-nguc",
        name: "Hố địa ngục",
        openingDay: "2021-5-28",
        poster: "ho-dia-nguc.jpg",
        trailer: "https://www.youtube.com/watch?v=PPrap89FiZI",
        description:
          "Hố khoan Kola Superdeep của Nga được khoan sâu 12.000m vào lòng đất – là cơ sở nghiên cứu bí mật sâu nhất thế giới được ghi lại cho đến nay. Vào năm 1984, các nhà khoa học bắt đầu nghe được những âm thanh lạ vọng từ hố sâu Kola và quyết định đóng cửa cơ sở nghiên cứu này. Một nhóm nghiên cứu đã quyết định thám hiểm hố khoan để tìm ra bí mật mà nơi đây đang ẩn giấu. Tuy nhiên, từng thành viên trong nhóm nghiên cứu đều lần lượt bỏ mạng. Những gì họ tìm thấy kinh khủng hơn bất cứ điều từng được ghi chép lại về chiếc hố tử thần này.",
        time: 100,
        sold: 104,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "bo-gia",
        name: "Bố già",
        openingDay: "2021-9-11",
        poster: "bo-gia-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=jluSu8Rw6YE",
        description:
          "Phim sẽ xoay quanh lối sống thường nhật của một xóm lao động nghèo, ở đó có bộ tứ anh em Giàu - Sang - Phú - Quý với Ba Sang sẽ là nhân vật chính, hay lo chuyện bao đồng nhưng vô cùng thương con cái. Câu chuyện phim tập trung về hai cha con Ba Sang (Trấn Thành) và Quắn (Tuấn Trần). Dù yêu thương nhau nhưng khoảng cách thế hệ đã đem đến những bất đồng lớn giữa hai cha con. Liệu cả hai có thể cho nhau cơ hội thấu hiểu đối phương, thu hẹp khoảng cách và tạo nên hạnh phúc từ sự khác biệt?",
        time: 200,
        sold: 160,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "mat-biec",
        name: "Mắt biếc",
        openingDay: "2021-6-20",
        poster: "mat-biec-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=KSFS0OfIK2c",
        description:
          "Đạo diễn Victor Vũ trở lại với một tác phẩm chuyển thể từ truyện ngắn cùng tên nổi tiếng của nhà văn Nguyễn Nhật Ánh: Mắt Biếc. Phim kể về chuyện tình đơn phương của chàng thanh niên Ngạn dành cho cô bạn từ thuở nhỏ Hà Lan...",
        time: 160,
        sold: 190,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "doremon-2020",
        name: "DORAEMON 2020",
        openingDay: "2021-10-01",
        poster: "doremon.jpg",
        trailer: "https://www.youtube.com/watch?v=WDILZzpgTJQ",
        description:
          "Trong lúc đang tham gia hoạt động khảo cổ ở một cuộc triễn lãm khủng long, Nobita tình cờ tìm thấy một viên hóa thạch và cậu tin rằng đây là trứng khủng long. Nobita liền mượn bảo bối thần kỳ 'khăn trùm thời gian' của Doraemon để giúp viên hóa thạch trở lại thời của chúng nhưng ngay sau đó, quả trứng liền nở ra một cặp khủng long song sinh. Ngạc nhiên hơn hết, đây lại là loài khủng long mới hoàn toàn và chưa từng được phát hiện.",
        time: 210,
        sold: 120,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "lat-mat",
        name: "Lật mặt",
        openingDay: "2021-6-29",
        poster: "lat-mat-poster.png",
        trailer: "https://www.youtube.com/watch?v=kBY2k3G6LsM",
        description:
          "Mình thấy Lý Hải đầu tư và nâng tầm phim việt rất nhiều. Tôi thích cách tạo phim của anh. Có sự bức phá. Đừng so sánh phim khác. Hãy nhìn sự tiến bộ của riêng phim anh và tình hình chung về phim việt.",
        time: 120,
        sold: 123,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "dua-be",
        name: "Đứa bé",
        openingDay: "2021-6-20",
        poster: "dua-be-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=ldBroBrV6Fg",
        description:
          "Do miếng cơm manh áo, cô sinh viên A Young đành chấp nhận công việc trông trẻ cho bà mẹ đơn thân Young Chae. Tuy nhiên khi phát hiện chị ta vì quá khó khăn mà định đưa đứa bé vào trại mồ côi, nàng ta đã quyết tâm ngăn cản vì A Young cũng là một đứa trẻ lớn lên trong cô nhi viện với nhiều đau thương và đơn độc.",
        time: 190,
        sold: 132,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "vung-dat-cam-lang-ii",
        name: "VÙNG ĐẤT CÂM LẶNG II",
        openingDay: "2021-7-20",
        poster: "vung-dat-cam-lang.jpg",
        trailer: "https://www.youtube.com/watch?v=0hLoZ20qTM8",
        description:
          "Phần hai tiếp nối các sự kiện xảy ra trong phần một, khi gia đình Abbot gồm người mẹ Evelyn (do Emily Blunt thủ vai) cùng ba con chạy trốn đến một thành phố tưởng như an toàn. Tuy nhiên, cả gia đình không ngờ rằng ở thế giới bên ngoài cũng đã bị những sinh vật ngoài hành tinh thâu tóm. Những sinh vật này khiếm khuyết về thị giác nhưng có thính giác siêu nhạy để săn mồi bằng cách lần theo âm thanh. “Vùng đất câm lặng” lúc này đã trở thành “thế giới câm lặng” khi những người sống sót tiếp tục phải lẩn trốn, không được tạo ra tiếng động mỗi khi di chuyển hay giao tiếp với nhau. Nhưng càng bước ra ngoài thế giới, gia đình Abbot sớm nhận ra rằng hiểm họa duy nhất không chỉ đến từ những sinh vật ngoài hành tinh. Những bí ẩn xung quanh cuộc đổ bộ của các giống loài này dần được hé lộ…",
        time: 90,
        sold: 105,
        createdAt: date,
        updatedAt: date,
      },
      {
        unsignedName: "dem-troi-buoc",
        name: "Đêm trói buộc",
        openingDay: "2021-6-20",
        poster: "dem-troi-buoc.jpg",
        trailer: "https://www.youtube.com/watch?v=UyoHbUqaSj0",
        description:
          "‘Đêm Trói Buộc’ kể về câu chuyện của một cặp vợ chồng người Iran (do Shahab Hosseini and Niousha Jafarian thủ vai) và đứa con gái một tuổi phát hiện họ bị nhốt bên trong khách sạn cũ và bị lực lượng ngoại bang cưỡng bức. Song tại đây, họ phải đối mặt với những bí mật mà cả hai đã âm thầm chôn giấu người bạn đời của mình.",
        time: 200,
        sold: 141,
        createdAt: date,
        updatedAt: date,
      },
    ];
    return queryInterface.bulkInsert("Movies", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
