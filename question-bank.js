const physicsQuizExtensions = {
  "intro-physics": {
    multipleChoice: [
      ["Mục tiêu của Vật lí là tìm hiểu các quy luật chi phối:", ["Vận động của vật chất, năng lượng và tương tác giữa chúng", "Chỉ sự sống của sinh vật", "Chỉ các sự kiện lịch sử", "Chỉ cấu tạo của ngôn ngữ"], 0, "Vật lí tìm các quy luật tổng quát về vận động của vật chất, năng lượng và sự tương tác giữa chúng."],
      ["Giai đoạn tiền Vật lí chủ yếu dựa vào:", ["Thí nghiệm hiện đại có kiểm soát", "Quan sát tự nhiên và suy luận cảm tính", "Cơ học lượng tử", "Máy tính điện tử"], 1, "Trước khi phương pháp thực nghiệm phát triển, con người chủ yếu quan sát và suy luận theo cảm tính."],
      ["Thuyết tương đối và cơ học lượng tử thuộc sự phát triển của:", ["Tiền Vật lí", "Vật lí cổ điển", "Vật lí hiện đại", "Thiên văn học cổ đại"], 2, "Thuyết tương đối và cơ học lượng tử là những thành tựu của Vật lí hiện đại."],
      ["Động cơ điện và máy phát điện gắn gần nhất với nền tảng Vật lí nào?", ["Điện từ học", "Quang hình học", "Âm học", "Cơ học chất lưu"], 0, "Các thiết bị điện như động cơ và máy phát điện được phát triển dựa trên điện từ học."],
      ["Một mô hình toán học trong nghiên cứu Vật lí thường dùng để:", ["Thay thế mọi phép đo thực tế", "Mô tả, dự đoán hoặc giải thích hiện tượng", "Chứng minh mọi giả thuyết đều đúng", "Loại bỏ hoàn toàn sai số"], 1, "Mô hình toán học dùng công thức để mô tả quan hệ và hỗ trợ dự đoán, giải thích hiện tượng."],
      ["Nếu kết quả thí nghiệm không phù hợp với giả thuyết, nhà nghiên cứu nên:", ["Sửa số liệu cho khớp", "Xem xét lại giả thuyết và tiếp tục kiểm tra", "Bỏ qua kết quả", "Kết luận thí nghiệm luôn sai"], 1, "Kết quả không phù hợp là lí do để kiểm tra phép đo, xem lại giả thuyết hoặc thiết kế thí nghiệm."],
      ["Tia sáng và chất điểm là ví dụ về:", ["Mô hình lí thuyết", "Vật thể luôn quan sát được nguyên dạng", "Định luật bảo toàn", "Thiết bị đo điện"], 0, "Tia sáng và chất điểm là các mô hình lí thuyết đơn giản hóa để mô tả hiện tượng."],
      ["Kiến thức Vật lí có thể hỗ trợ trực tiếp cho ngành nào dưới đây?", ["Hóa học", "Ngữ pháp", "Lịch sử nghệ thuật", "Văn bản học"], 0, "Các kiến thức Vật lí góp phần giải thích nhiều hiện tượng trong Hóa học và các khoa học tự nhiên khác."],
      ["Sóng Wi‑Fi truyền thông tin chủ yếu nhờ:", ["Sóng điện từ", "Sóng địa chấn", "Dòng nước", "Âm thanh trong dây dẫn"], 0, "Wi‑Fi sử dụng sóng điện từ để truyền dữ liệu không dây."],
      ["Điều nào thể hiện việc ứng dụng Vật lí có trách nhiệm?", ["Cân nhắc tác động đến môi trường và con người", "Khai thác tài nguyên không giới hạn", "Bỏ qua mọi rủi ro", "Chỉ quan tâm đến tốc độ phát triển"], 0, "Ứng dụng khoa học cần cân nhắc tác động xã hội, môi trường và sự an toàn."],
      ["Máy hơi nước thường được xem là ứng dụng tiêu biểu của:", ["Nhiệt động lực học", "Cơ học lượng tử", "Quang học hiện đại", "Vật lí hạt nhân"], 0, "Máy hơi nước gắn với những kiến thức về nhiệt và sự chuyển hóa năng lượng."],
      ["Trong nghiên cứu khoa học, vai trò của giả thuyết là:", ["Đưa ra cách giải thích có thể kiểm tra", "Thay thế hoàn toàn bằng chứng", "Là kết luận không thể thay đổi", "Ngăn việc thực hiện thí nghiệm"], 0, "Giả thuyết là cách giải thích hoặc dự đoán tạm thời cần được kiểm tra bằng bằng chứng."]
    ],
    trueFalse: [
      { title: "Đối tượng và lịch sử Vật lí", statements: [
        ["Vật lí nghiên cứu vật chất và năng lượng.", true, "Đây là hai đối tượng nghiên cứu cơ bản của Vật lí."],
        ["Tiền Vật lí đã sử dụng phổ biến thí nghiệm kiểm soát như khoa học hiện đại.", false, "Giai đoạn này chủ yếu dựa vào quan sát và suy luận cảm tính."],
        ["Phương pháp thực nghiệm phát triển mạnh trong giai đoạn Vật lí cổ điển.", true, "Thực nghiệm là một đặc trưng quan trọng của Vật lí cổ điển."],
        ["Cơ học lượng tử là thành tựu của Vật lí hiện đại.", true, "Cơ học lượng tử nghiên cứu thế giới vi mô và thuộc Vật lí hiện đại."]
      ]},
      { title: "Vai trò và ứng dụng", statements: [
        ["Kiến thức Vật lí chỉ có ích trong môn Vật lí.", false, "Vật lí còn là nền tảng và hỗ trợ nhiều ngành khoa học tự nhiên."],
        ["Sóng điện từ được ứng dụng trong liên lạc không dây như Wi‑Fi.", true, "Wi‑Fi sử dụng sóng điện từ để truyền dữ liệu."],
        ["Ứng dụng công nghệ không cần xem xét tác động đến môi trường.", false, "Cần cân nhắc ô nhiễm, tài nguyên và các hệ quả đối với con người."],
        ["Máy tính và Internet có liên hệ với các thành tựu Vật lí hiện đại.", true, "Nhiều công nghệ hiện đại dựa trên điện tử, bán dẫn và sóng điện từ."]
      ]},
      { title: "Phương pháp nghiên cứu", statements: [
        ["Thí nghiệm có thể được dùng để kiểm chứng giả thuyết.", true, "Đây là bước quan trọng của phương pháp thực nghiệm."],
        ["Nếu kết quả khác dự đoán thì luôn phải bỏ kết quả đo.", false, "Cần xem xét dữ liệu, phép đo và giả thuyết một cách khách quan."],
        ["Mô hình có thể là vật chất thu nhỏ hoặc mô hình toán học.", true, "Có nhiều dạng mô hình khác nhau để mô phỏng và giải thích hiện tượng."],
        ["Phương pháp thực nghiệm và phương pháp mô hình có thể bổ trợ nhau.", true, "Mô hình có thể tạo dự đoán để kiểm tra bằng thực nghiệm."]
      ]}
    ],
    shortAnswer: [
      { question: "Viết bốn bước cơ bản của phương pháp thực nghiệm theo thứ tự, ngăn cách bằng dấu phẩy.", acceptedAnswers: ["quan sát, giả thuyết, thí nghiệm kiểm chứng, kết luận", "quan sát, đề xuất giả thuyết, làm thí nghiệm kiểm chứng, kết luận"], expectedAnswer: "Quan sát → giả thuyết → thí nghiệm kiểm chứng → kết luận", explanation: "Nhà nghiên cứu quan sát hiện tượng, đề xuất giả thuyết, kiểm tra bằng thí nghiệm rồi rút ra kết luận." },
      { question: "Nêu một dạng mô hình thường dùng trong nghiên cứu Vật lí.", acceptedAnswers: ["mô hình vật chất", "mô hình toán học", "mô hình lí thuyết", "mô hình vật chất thu nhỏ"], expectedAnswer: "Mô hình vật chất, toán học hoặc lí thuyết", explanation: "Ví dụ gồm mô hình vật chất thu nhỏ, công thức toán học, tia sáng hoặc chất điểm." }
    ]
  },
  "lab-safety": {
    multipleChoice: [
      ["Khi chuẩn bị thí nghiệm điện, việc nào giúp hạn chế nguy cơ?", ["Kiểm tra dây dẫn và làm theo hướng dẫn", "Dùng dây bị hở", "Để nước cạnh mạch", "Cắm điện trước khi lắp mạch"], 0, "Cần kiểm tra dụng cụ, tránh dây hỏng và chỉ cấp điện khi đã lắp xong, được giáo viên cho phép."],
      ["Dụng cụ thủy tinh nên được đặt:", ["Chắc chắn, tránh mép bàn", "Sát mép bàn cho dễ lấy", "Trên dây điện", "Ở nơi mọi người dễ va phải"], 0, "Đặt dụng cụ thủy tinh vững và tránh mép bàn để giảm nguy cơ rơi vỡ."],
      ["Biển báo hình tam giác, nền vàng thường có ý nghĩa:", ["Cảnh báo nguy hiểm", "Bắt buộc thực hiện", "Lối thoát hiểm", "Nơi để đồ dùng cá nhân"], 0, "Biển tam giác nền vàng thường dùng để cảnh báo nguy hiểm."],
      ["Biển báo hình tròn nền xanh dương thường chỉ:", ["Hành động bắt buộc", "Điều cấm", "Cảnh báo nguy hiểm", "Vị trí lối thoát hiểm"], 0, "Biển tròn nền xanh thường yêu cầu thực hiện hành động như đeo kính bảo hộ."],
      ["Khi làm thí nghiệm có yêu cầu đeo kính bảo hộ, em nên:", ["Đeo kính theo hướng dẫn", "Chỉ đeo sau khi có sự cố", "Cho bạn mượn rồi làm tiếp", "Bỏ qua nếu thí nghiệm ngắn"], 0, "Dùng đồ bảo hộ theo yêu cầu của bài thực hành và hướng dẫn giáo viên."],
      ["Phát hiện dụng cụ thủy tinh đã nứt trước khi dùng, em nên:", ["Báo giáo viên và không tự ý dùng", "Dùng tiếp nếu cẩn thận", "Giấu vết nứt", "Đặt sát mép bàn"], 0, "Dụng cụ nứt có thể vỡ và gây thương tích; cần báo giáo viên để được hướng dẫn."],
      ["Trong khi thực hành, dây điện nên được:", ["Bố trí gọn gàng, không vướng lối đi", "Kéo căng ngang lối đi", "Đặt nơi dễ bị đạp lên", "Quấn quanh tay"], 0, "Bố trí dây gọn giúp tránh vướng víu và làm đổ thiết bị."],
      ["Biển tròn viền đỏ, nền trắng, có gạch chéo đỏ thường là biển:", ["Cấm", "Bắt buộc", "Chỉ dẫn lối thoát", "Khuyến khích"], 0, "Đây là dạng biển báo cấm, ví dụ cấm lửa hoặc cấm chạm tay."],
      ["Biển xanh lá hình vuông hoặc chữ nhật thường chỉ:", ["Lối thoát hiểm hoặc thiết bị cứu hộ", "Nguồn điện đang hoạt động", "Khu vực cấm", "Nơi có nhiệt độ cao"], 0, "Biển xanh lá thường chỉ dẫn lối thoát hiểm hoặc vị trí thiết bị cứu hộ."],
      ["Trước khi bắt đầu thí nghiệm, cần:", ["Đọc hướng dẫn và kiểm tra dụng cụ", "Tự ý cắm điện", "Chạy thử thiết bị hỏng", "Bỏ qua biển báo"], 0, "Đọc hướng dẫn và kiểm tra thiết bị giúp nhận biết nguy cơ trước khi thao tác."],
      ["Sau khi hoàn thành thí nghiệm điện, việc phù hợp trước khi tháo mạch là:", ["Tắt công tắc nguồn", "Kéo dây điện khi nguồn đang bật", "Đổ nước để làm mát", "Chạm vào các đầu nối"], 0, "Luôn tắt nguồn trước khi tháo mạch điện."],
      ["Khi xảy ra sự cố hoặc có người bị thương trong phòng thực hành, cần:", ["Báo ngay cho giáo viên", "Tự xử lí thiết bị bất kể nguy cơ", "Tiếp tục làm thí nghiệm", "Rời đi mà không báo"], 0, "Báo giáo viên ngay để người có trách nhiệm hướng dẫn xử lí an toàn."]
    ],
    trueFalse: [
      { title: "Thiết bị điện, nhiệt và quang học", statements: [
        ["Nên kiểm tra dây dẫn trước khi sử dụng.", true, "Kiểm tra giúp phát hiện dây hở hoặc sờn trước khi cấp điện."],
        ["Có thể tháo mạch điện khi nguồn vẫn đang bật nếu thao tác nhanh.", false, "Cần tắt nguồn trước khi tháo lắp mạch."],
        ["Không nên chạm tay trực tiếp vào vật đang nung nóng.", true, "Dùng dụng cụ phù hợp và làm theo hướng dẫn để tránh bỏng."],
        ["Có thể hướng tia laser vào mắt người khác nếu chỉ trong chốc lát.", false, "Không nhìn trực tiếp vào tia laser hoặc hướng tia về phía người."]
      ]},
      { title: "Quy trình thực hành", statements: [
        ["Cần đọc hướng dẫn và kiểm tra dụng cụ trước khi thực hành.", true, "Chuẩn bị giúp nhận biết yêu cầu và phát hiện thiết bị hỏng."],
        ["Chỉ tiến hành thí nghiệm khi được giáo viên cho phép.", true, "Làm theo hướng dẫn và sự cho phép của giáo viên."],
        ["Ăn uống và đùa nghịch trong phòng thực hành là an toàn nếu cẩn thận.", false, "Không ăn uống hoặc đùa nghịch; hành vi này có thể gây đổ vỡ và tai nạn."],
        ["Dây điện nên được bố trí gọn, không vướng lối đi.", true, "Dây gọn giúp tránh vấp và kéo đổ dụng cụ."]
      ]},
      { title: "Biển báo và xử lí sự cố", statements: [
        ["Biển tam giác nền vàng thường dùng để cảnh báo nguy hiểm.", true, "Đây là dạng biển cảnh báo phổ biến."],
        ["Biển tròn viền đỏ thường biểu thị việc bắt buộc phải làm.", false, "Biển tròn nền xanh thường chỉ hành động bắt buộc; viền đỏ thường chỉ điều cấm."],
        ["Biển xanh lá có thể chỉ lối thoát hiểm hoặc thiết bị cứu hộ.", true, "Biển xanh lá hình vuông hoặc chữ nhật thường là biển chỉ dẫn an toàn."],
        ["Khi thấy mùi khét hoặc tia lửa điện, cần báo ngay cho giáo viên.", true, "Dừng thao tác và báo giáo viên; không tự ý xử lí thiết bị."]
      ]}
    ],
    shortAnswer: [
      { question: "Nêu việc đầu tiên cần làm trước khi tháo một mạch điện thí nghiệm.", acceptedAnswers: ["tắt nguồn", "tắt nguồn điện", "tắt công tắc nguồn"], expectedAnswer: "Tắt nguồn điện", explanation: "Tắt công tắc nguồn trước khi tháo mạch để giảm nguy cơ điện giật hoặc chập điện." },
      { question: "Khi phát hiện thiết bị có mùi khét, em cần báo cho ai?", acceptedAnswers: ["giáo viên", "báo giáo viên", "giáo viên hướng dẫn"], expectedAnswer: "Báo ngay cho giáo viên", explanation: "Báo ngay cho giáo viên hướng dẫn và không tự ý tháo hoặc sửa thiết bị."}
    ]
  }
};
