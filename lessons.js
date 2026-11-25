const physicsLessons = [
  {
    id: "intro-physics",
    category: "Nhập môn",
    level: "Lớp 10",
    duration: "15 phút",
    icon: "⚛️",
    title: "Bài 1: Làm quen với Vật lí",
    summary: "Tìm hiểu Vật lí nghiên cứu điều gì, phát triển ra sao và được nghiên cứu bằng những phương pháp nào.",
    intro: "Từ quả bóng rơi, dòng điện trong dây dẫn đến sóng Wi‑Fi, Vật lí giúp ta khám phá các quy luật vận động của vật chất và năng lượng. Bài học này giới thiệu đối tượng, lịch sử, vai trò và phương pháp nghiên cứu Vật lí.",
    objectives: [
      "Nêu được đối tượng và mục tiêu nghiên cứu của Vật lí.",
      "Phân biệt các giai đoạn tiền Vật lí, Vật lí cổ điển và Vật lí hiện đại.",
      "Mô tả vai trò của Vật lí trong khoa học, kĩ thuật và công nghệ.",
      "Trình bày được phương pháp thực nghiệm và phương pháp mô hình."
    ],
    core: [
      { title: "Vật lí nghiên cứu vật chất và năng lượng", text: "Vật lí nghiên cứu các dạng vận động của vật chất (chất và trường), năng lượng cùng sự tương tác giữa chúng, từ thế giới vi mô đến vũ trụ." },
      { title: "Ba chặng đường phát triển", text: "Tiền Vật lí dựa nhiều vào quan sát và suy luận cảm tính; Vật lí cổ điển phát triển phương pháp thực nghiệm từ thế kỉ XVII; Vật lí hiện đại khám phá thế giới vi mô và mở đường cho nhiều công nghệ mới." },
      { title: "Nền tảng cho khoa học và công nghệ", text: "Kiến thức Vật lí hỗ trợ Hóa học, Sinh học, Địa lí và Thiên văn học; đồng thời góp phần tạo ra máy hơi nước, động cơ điện, máy tính, Internet và nhiều công nghệ hiện đại." },
      { title: "Ứng dụng đi cùng trách nhiệm", text: "Ứng dụng Vật lí thiếu kiểm soát có thể gây ô nhiễm, cạn kiệt tài nguyên hoặc tạo ra vũ khí hủy diệt. Tiến bộ khoa học cần gắn với trách nhiệm đối với con người và môi trường." },
      { title: "Hai phương pháp nghiên cứu bổ trợ nhau", text: "Phương pháp thực nghiệm kiểm tra giả thuyết bằng quan sát và thí nghiệm. Phương pháp mô hình dùng mô hình vật chất, toán học hoặc lí thuyết để mô phỏng và giải thích hiện tượng." }
    ],
    nature: "Nghiên cứu Vật lí là quá trình đặt câu hỏi, xây dựng cách giải thích rồi kiểm tra bằng bằng chứng. Kết quả không phù hợp là cơ hội xem lại giả thuyết hoặc mô hình, chứ không phải lí do để bỏ qua dữ liệu.",
    guideLabel: "Phương pháp nghiên cứu",
    guideTitle: "Cách tìm hiểu hiện tượng",
    formulas: [
      { name: "Phương pháp thực nghiệm", formula: "Quan sát → Giả thuyết → Thí nghiệm kiểm chứng → Kết luận", note: "Nếu kết quả không phù hợp, điều chỉnh giả thuyết và tiếp tục kiểm tra." },
      { name: "Phương pháp mô hình", formula: "Hiện tượng thực tế → Mô hình → Dự đoán và giải thích", note: "Mô hình có thể là vật chất thu nhỏ, công thức toán học hoặc mô hình lí thuyết như tia sáng và chất điểm." }
    ],
    practical: "Khi dùng điện thoại kết nối Wi‑Fi, sóng điện từ truyền thông tin giữa thiết bị và bộ định tuyến. Đây là một ví dụ gần gũi về kiến thức Vật lí được ứng dụng trong công nghệ.",
    example: {
      problem: "Muốn kiểm tra xem một xe đồ chơi đi được quãng đường có tăng theo thời gian hay không, em có thể tiến hành thế nào?",
      steps: [
        "Đặt giả thuyết: nếu xe chạy đều thì thời gian tăng gấp đôi, quãng đường cũng tăng gấp đôi.",
        "Cho xe chạy trên cùng một mặt phẳng; đo quãng đường sau các khoảng thời gian bằng nhau và lặp lại phép đo.",
        "So sánh số liệu với giả thuyết; nêu kết luận hoặc điều chỉnh cách giải thích."
      ],
      answer: "Đây là phương pháp thực nghiệm: quan sát, đề xuất giả thuyết, kiểm tra bằng phép đo rồi kết luận."
    },
    simulation: "motion",
    questions: [
      { question: "Vật lí tập trung nghiên cứu:", options: ["Chỉ các sinh vật sống", "Vật chất, năng lượng và sự tương tác giữa chúng", "Chỉ các phản ứng hóa học", "Chỉ lịch sử xã hội"], correct: 1, explanation: "Vật lí nghiên cứu các dạng vận động của vật chất, năng lượng và sự tương tác giữa chúng." },
      { question: "Đặc điểm nổi bật của Vật lí cổ điển từ thế kỉ XVII là:", options: ["Chỉ giải thích bằng cảm tính", "Phát triển phương pháp thực nghiệm", "Chưa có quan sát tự nhiên", "Chỉ nghiên cứu trí tuệ nhân tạo"], correct: 1, explanation: "Vật lí cổ điển gắn với sự phát triển của phương pháp thực nghiệm, tiêu biểu là Galileo và Newton." },
      { question: "Trong phương pháp thực nghiệm, sau khi đề xuất giả thuyết, bước phù hợp tiếp theo là:", options: ["Bỏ qua việc kiểm tra", "Làm thí nghiệm để kiểm chứng", "Khẳng định giả thuyết luôn đúng", "Thay đổi kết quả đo"], correct: 1, explanation: "Giả thuyết cần được kiểm tra bằng thí nghiệm; kết quả giúp đưa ra kết luận hoặc điều chỉnh giả thuyết." }
    ],
    summaryPoints: [
      "Vật lí nghiên cứu vật chất, năng lượng và sự tương tác giữa chúng.",
      "Lịch sử phát triển gồm tiền Vật lí, Vật lí cổ điển và Vật lí hiện đại.",
      "Vật lí là nền tảng của nhiều ngành khoa học, kĩ thuật và công nghệ.",
      "Thực nghiệm kiểm tra giả thuyết; mô hình mô phỏng và giải thích hiện tượng."
    ]
  },
  {
    id: "lab-safety",
    category: "Thực hành",
    level: "Lớp 10",
    duration: "15 phút",
    icon: "🧪",
    title: "Bài 2: Các quy tắc an toàn trong phòng thực hành Vật lí",
    summary: "Nhận biết nguy cơ từ thiết bị, hiểu biển báo và thực hành đúng cách để bảo vệ bản thân cùng dụng cụ.",
    intro: "Phòng thực hành có thể có điện, nhiệt, thủy tinh và nguồn sáng mạnh. Nhận diện nguy cơ, làm theo hướng dẫn của giáo viên và báo ngay sự cố sẽ giúp giảm rủi ro cho mọi người.",
    objectives: [
      "Nhận biết nguy cơ khi dùng thiết bị điện, thiết bị nhiệt, thủy tinh và laser.",
      "Nêu được việc cần làm trước, trong và sau buổi thực hành.",
      "Phân biệt ý nghĩa cơ bản của các nhóm biển báo an toàn.",
      "Biết báo giáo viên khi phát hiện thiết bị hỏng hoặc sự cố."
    ],
    core: [
      { title: "Thiết bị điện", text: "Dây dẫn hở, cắm sai nguồn hoặc nước gần mạch điện có thể gây điện giật, chập điện hay cháy. Chỉ cắm điện khi đã lắp xong mạch và được giáo viên cho phép; tắt nguồn trước khi tháo lắp." },
      { title: "Thiết bị nóng và thủy tinh", text: "Vật đang nung nóng có thể gây bỏng; thủy tinh nứt hoặc vỡ có thể làm đứt tay. Không chạm trực tiếp vào vật nóng, dùng kẹp phù hợp và đặt đồ thủy tinh chắc chắn, tránh mép bàn." },
      { title: "Laser và nguồn sáng mạnh", text: "Không nhìn trực tiếp vào tia laser hoặc hướng tia về phía người khác vì có thể gây tổn thương mắt." },
      { title: "Đọc biển báo trước khi thao tác", text: "Biển tam giác nền vàng thường cảnh báo nguy hiểm; biển tròn viền đỏ thường chỉ điều cấm; biển tròn nền xanh chỉ việc bắt buộc; biển xanh lá hình vuông hoặc chữ nhật thường chỉ lối thoát hiểm hay thiết bị cứu hộ." },
      { title: "An toàn là trách nhiệm chung", text: "Làm sai quy trình, không kiểm tra dụng cụ, thiếu bảo hộ hoặc đùa nghịch đều có thể dẫn đến tai nạn. Báo giáo viên ngay nếu thấy thiết bị hỏng, có mùi khét, tia lửa điện hoặc có người bị thương." }
    ],
    nature: "Không tự ý tiến hành thí nghiệm hoặc xử lí sự cố. Làm theo hướng dẫn của giáo viên, dừng thao tác khi có dấu hiệu bất thường và giữ an toàn cho bản thân, bạn học trước khi bảo vệ thiết bị.",
    guideLabel: "Quy tắc an toàn",
    guideTitle: "Trước, trong và sau buổi thực hành",
    formulas: [
      { name: "Trước khi thực hành", formula: "Đọc hướng dẫn · kiểm tra dụng cụ · chuẩn bị bảo hộ", note: "Mặc trang phục gọn gàng, buộc tóc và dùng kính hoặc găng tay nếu bài thực hành yêu cầu." },
      { name: "Trong khi thực hành", formula: "Chờ giáo viên cho phép · thao tác đúng quy trình · báo sự cố", note: "Giữ dây điện gọn, không ăn uống hoặc đùa nghịch; tránh xa vật nóng và vật chuyển động nhanh." },
      { name: "Sau khi thực hành", formula: "Tắt nguồn · thu dọn dụng cụ · rửa tay", note: "Tắt công tắc trước khi tháo mạch, đặt thiết bị về đúng nơi quy định và báo nếu phát hiện hư hỏng." }
    ],
    practical: "Nếu ngửi thấy mùi khét hoặc nhìn thấy tia lửa từ thiết bị, hãy dừng thao tác, tránh chạm vào thiết bị và báo ngay cho giáo viên hướng dẫn.",
    example: {
      problem: "Em phát hiện dây dẫn bị hở vỏ cách điện trước khi lắp mạch. Em nên làm gì?",
      steps: [
        "Không cắm điện và không tiếp tục sử dụng dây dẫn đó.",
        "Báo cho giáo viên để được hướng dẫn thay dụng cụ an toàn.",
        "Chỉ tiếp tục khi giáo viên xác nhận thiết bị và mạch đã sẵn sàng."
      ],
      answer: "Dừng thao tác và báo giáo viên; không tự ý dùng dây hỏng hoặc sửa thiết bị."
    },
    simulation: null,
    questions: [
      { question: "Trước khi tháo lắp một mạch điện thí nghiệm, cần:", options: ["Tắt nguồn điện", "Chạm tay vào dây để kiểm tra", "Đổ nước lên bàn", "Tự ý đổi nguồn điện"], correct: 0, explanation: "Tắt nguồn trước khi tháo lắp giúp giảm nguy cơ điện giật hoặc chập điện." },
      { question: "Khi sử dụng đèn laser trong phòng thực hành, cần:", options: ["Nhìn thẳng vào tia để căn chỉnh", "Hướng tia vào người khác", "Không nhìn trực tiếp vào tia và không chiếu vào người", "Chiếu tia lên mắt kính của bạn"], correct: 2, explanation: "Tia laser có thể gây tổn thương mắt; không nhìn trực tiếp hoặc hướng tia về phía người." },
      { question: "Nếu phát hiện thiết bị có mùi khét trong lúc thực hành, em nên:", options: ["Tiếp tục thí nghiệm cho xong", "Báo ngay cho giáo viên", "Tự tháo thiết bị đang cắm điện", "Che thiết bị lại"], correct: 1, explanation: "Cần dừng thao tác và báo giáo viên khi có dấu hiệu bất thường; không tự ý xử lí thiết bị." }
    ],
    summaryPoints: [
      "Kiểm tra thiết bị và đọc hướng dẫn trước khi thực hành.",
      "Làm theo cho phép và quy trình của giáo viên; sử dụng bảo hộ phù hợp.",
      "Tránh chạm thiết bị nóng, thủy tinh vỡ và không chiếu laser vào mắt.",
      "Tắt nguồn trước khi tháo mạch; báo ngay hư hỏng hoặc sự cố."
    ]
  }
];
