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
    simulation: null,
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
  },
  {
    id: "measurement-errors",
    category: "Thực hành",
    level: "Lớp 10 · Kết nối tri thức",
    duration: "20 phút",
    icon: "🎯",
    title: "Bài 3: Thực hành tính sai số trong phép đo",
    summary: "Tính giá trị trung bình, sai số và ghi kết quả đo đúng quy cách.",
    intro: "Không phép đo thực tế nào hoàn toàn chính xác. Đo lặp lại, đánh giá sai số và ghi kết quả kèm đơn vị giúp chúng ta biết số liệu đáng tin cậy đến mức nào.",
    objectives: [
      "Phân biệt phép đo trực tiếp và phép đo gián tiếp.",
      "Tính giá trị trung bình và sai số tuyệt đối của các lần đo.",
      "Xác định sai số tỉ đối và áp dụng quy tắc truyền sai số cơ bản.",
      "Ghi kết quả phép đo kèm sai số và đơn vị phù hợp."
    ],
    core: [
      { title: "Đo trực tiếp và đo gián tiếp", text: "Đo trực tiếp là đọc đại lượng cần đo trên dụng cụ. Đo gián tiếp là tính đại lượng cần tìm từ các đại lượng đo trực tiếp và công thức liên hệ." },
      { title: "Giá trị trung bình", text: "Đo cùng một đại lượng nhiều lần trong điều kiện tương tự rồi lấy trung bình giúp giảm ảnh hưởng của sai số ngẫu nhiên." },
      { title: "Hai nguồn sai số", text: "Sai số ngẫu nhiên biến đổi không theo quy luật rõ ràng giữa các lần đo. Sai số hệ thống làm kết quả lệch theo một hướng, chẳng hạn dụng cụ lệch điểm 0." },
      { title: "Độ tin cậy của kết quả", text: "Sai số tuyệt đối cho biết khoảng lệch của phép đo theo cùng đơn vị với đại lượng. Sai số tỉ đối biểu thị mức sai lệch so với giá trị trung bình và thường ghi theo phần trăm." },
      { title: "Trình bày số liệu", text: "Kết quả cần ghi giá trị trung bình, sai số tuyệt đối và đơn vị. Làm tròn giá trị trung bình phù hợp với hàng thập phân của sai số." }
    ],
    nature: "Sai số không có nghĩa phép đo vô ích; nó cho biết giới hạn chính xác của số liệu và giúp so sánh các kết quả một cách có căn cứ.",
    guideLabel: "Quy tắc xử lí số liệu",
    guideTitle: "Tính sai số và ghi kết quả đo",
    formulas: [
      { name: "Giá trị trung bình", formula: "Ā = (A₁ + A₂ + … + Aₙ) / n", note: "A₁, A₂, …, Aₙ là các lần đo; n là số lần đo." },
      { name: "Sai số tuyệt đối trung bình", formula: "ΔAₜᵦ = (|A₁ − Ā| + … + |Aₙ − Ā|) / n", note: "Sai số tuyệt đối của mỗi lần đo là |Aᵢ − Ā|." },
      { name: "Sai số phép đo và sai số tỉ đối", formula: "ΔA = ΔAₜᵦ + ΔAđc;  δA = (ΔA / |Ā|) · 100%", note: "Sai số dụng cụ được xác định theo đặc điểm và độ phân giải của dụng cụ." },
      { name: "Ghi kết quả", formula: "A = (Ā ± ΔA) [đơn vị]", note: "Với tổng/hiệu, cộng các sai số tuyệt đối; với tích/thương, cộng gần đúng các sai số tỉ đối." }
    ],
    practical: "Khi đo chiều dài một vật bằng thước, đặt thước sát vật, nhìn vuông góc vạch chia và lặp lại phép đo. Cách làm này hạn chế thị sai và sai số ngẫu nhiên.",
    example: {
      problem: "Đo chiều dài được 10,1; 10,2; 10,0; 10,1; 10,1 cm. Nếu sai số dụng cụ là 0,05 cm, hãy ước tính kết quả đo.",
      steps: [
        "Giá trị trung bình Ā = 10,1 cm.",
        "Các độ lệch tuyệt đối là 0; 0,1; 0,1; 0; 0 cm nên ΔAₜᵦ = 0,04 cm.",
        "Sai số phép đo ΔA = 0,04 + 0,05 = 0,09 cm; làm tròn phù hợp thành 0,1 cm."
      ],
      answer: "A = (10,1 ± 0,1) cm."
    },
    simulation: null,
    questions: [],
    summaryPoints: [
      "Đo trực tiếp là đọc dụng cụ; đo gián tiếp là tính từ các đại lượng đo được.",
      "Đo lặp lại và lấy trung bình giúp giảm ảnh hưởng của sai số ngẫu nhiên.",
      "Sai số phép đo thường gồm sai số trung bình và sai số dụng cụ.",
      "Ghi kết quả theo dạng A = (Ā ± ΔA), kèm đơn vị."
    ]
  },
  {
    id: "displacement-distance",
    category: "Chuyển động",
    level: "Lớp 10 · Kết nối tri thức",
    duration: "20 phút",
    icon: "↗️",
    title: "Bài 4: Độ dịch chuyển và quãng đường đi được",
    summary: "Phân biệt quãng đường với độ dịch chuyển và vận dụng vectơ để mô tả chuyển động.",
    intro: "Khi mô tả chuyển động, quãng đường ghi nhận toàn bộ độ dài đường đi, còn độ dịch chuyển nối vị trí đầu với vị trí cuối và có hướng. Hai đại lượng này có thể bằng nhau hoặc rất khác nhau tùy hành trình.",
    objectives: [
      "Phân biệt quãng đường đi được với độ dịch chuyển.",
      "Xác định độ dịch chuyển từ vị trí đầu, vị trí cuối và chiều chuyển động.",
      "Tính quãng đường trên đường gấp khúc hoặc hành trình đổi chiều.",
      "Dùng hệ tọa độ và vectơ để mô tả vị trí, hướng chuyển động."
    ],
    core: [
      { title: "Quãng đường phụ thuộc toàn bộ đường đi", text: "Quãng đường là tổng độ dài các đoạn đường vật đã đi. Đây là đại lượng vô hướng và không giảm khi vật đổi chiều." },
      { title: "Độ dịch chuyển nối đầu và cuối", text: "Độ dịch chuyển là vectơ từ vị trí ban đầu đến vị trí cuối cùng. Độ lớn của nó không vượt quá quãng đường đã đi." },
      { title: "Đường thẳng và đổi chiều", text: "Nếu vật đi thẳng một chiều thì quãng đường bằng độ lớn độ dịch chuyển. Khi vật quay lại, quãng đường vẫn cộng cả hai chặng còn độ dịch chuyển chỉ phụ thuộc hai vị trí đầu, cuối." },
      { title: "Chuyển động trên mặt phẳng", text: "Có thể dùng hệ tọa độ để xác định vị trí. Với hai thành phần độ dịch chuyển vuông góc, độ lớn vectơ tổng hợp được tính bằng định lí Pythagore." }
    ],
    nature: "Quãng đường mô tả độ dài quỹ đạo thực tế; độ dịch chuyển mô tả sự thay đổi vị trí có hướng. Cần xác định rõ đại lượng được hỏi trước khi tính.",
    guideLabel: "Công thức và cách biểu diễn",
    guideTitle: "Quãng đường và độ dịch chuyển",
    formulas: [
      { name: "Quãng đường", formula: "s = tổng độ dài các đoạn đường", note: "Cộng độ dài tất cả các chặng, kể cả khi vật quay lại." },
      { name: "Độ dịch chuyển trên một trục", formula: "Δx = x₂ − x₁", note: "Dấu của Δx biểu thị chiều; độ lớn là |Δx|." },
      { name: "Hai thành phần vuông góc", formula: "d = √(Δx² + Δy²)", note: "Độ lớn vectơ độ dịch chuyển được xác định từ hai thành phần vuông góc." }
    ],
    practical: "Khi xem bản đồ đường đi, tổng quãng đường đi theo các phố có thể dài hơn nhiều so với khoảng cách thẳng nối điểm xuất phát và điểm đến.",
    example: {
      problem: "Một người đi 6 km về phía Bắc rồi 8 km về phía Đông. Quãng đường và độ lớn độ dịch chuyển là bao nhiêu?",
      steps: [
        "Quãng đường bằng tổng hai chặng: 6 + 8 = 14 km.",
        "Hai hướng vuông góc nên độ lớn độ dịch chuyển là √(6² + 8²).",
        "Tính được độ dịch chuyển bằng 10 km."
      ],
      answer: "Quãng đường 14 km; độ lớn độ dịch chuyển 10 km."
    },
    simulation: null,
    questions: [],
    summaryPoints: [
      "Quãng đường là tổng độ dài đường đi; độ dịch chuyển là vectơ nối vị trí đầu và cuối.",
      "Độ lớn độ dịch chuyển luôn nhỏ hơn hoặc bằng quãng đường.",
      "Vật đi thẳng một chiều thì quãng đường bằng độ lớn độ dịch chuyển.",
      "Các thành phần vuông góc được tổng hợp bằng định lí Pythagore."
    ]
  },
  {
    id: "speed-velocity",
    category: "Chuyển động",
    level: "Lớp 10 · Kết nối tri thức",
    duration: "20 phút",
    icon: "🏃",
    title: "Bài 5: Tốc độ và vận tốc",
    summary: "Dùng tốc độ để mô tả độ nhanh chậm và vận tốc để mô tả cả độ lớn lẫn hướng chuyển động.",
    intro: "Tốc độ kế cho biết xe chạy nhanh hay chậm, còn khi dự báo vị trí và hướng đi, ta cần đến vận tốc. Hai khái niệm liên quan nhưng không thể thay thế cho nhau trong mọi tình huống.",
    objectives: [
      "Phân biệt tốc độ với vận tốc và quãng đường với độ dịch chuyển.",
      "Tính tốc độ trung bình, vận tốc trung bình và đổi đơn vị.",
      "Xác định vận tốc có dấu trên một trục tọa độ.",
      "Giải bài toán vận tốc tương đối và chuyển động có dòng nước."
    ],
    core: [
      { title: "Tốc độ không kèm hướng", text: "Tốc độ là đại lượng vô hướng, cho biết mức độ nhanh hay chậm. Tốc độ trung bình bằng tổng quãng đường chia tổng thời gian xét." },
      { title: "Vận tốc có hướng", text: "Vận tốc trung bình là vectơ độ dịch chuyển chia cho khoảng thời gian. Trên một trục, dấu dương hoặc âm cho biết chiều chuyển động theo quy ước." },
      { title: "Quãng đường và độ dịch chuyển", text: "Quãng đường cộng toàn bộ các chặng; độ dịch chuyển chỉ phụ thuộc vị trí đầu và cuối. Độ lớn vận tốc trung bình không vượt quá tốc độ trung bình." },
      { title: "Chuyển động tương đối", text: "Vận tốc của vật so với một hệ quy chiếu được xác định bằng phép cộng vectơ vận tốc qua hệ trung gian. Cùng chiều thì tốc độ thường cộng; ngược chiều thì lấy hiệu có xét dấu." },
      { title: "Đồ thị chuyển động", text: "Độ dốc của đồ thị tọa độ–thời gian cho biết vận tốc. Diện tích có dấu dưới đồ thị vận tốc–thời gian cho biết độ dịch chuyển." }
    ],
    nature: "Tốc độ luôn không âm và chỉ mô tả độ nhanh chậm; vận tốc có hướng nên có thể dương, âm hoặc bằng không tùy quy ước và hành trình.",
    guideLabel: "Công thức và quy ước",
    guideTitle: "Tốc độ, vận tốc và chuyển động tương đối",
    formulas: [
      { name: "Tốc độ trung bình", formula: "vₜᵦ = s / Δt", note: "s là tổng quãng đường; Δt là tổng thời gian được tính." },
      { name: "Vận tốc trung bình", formula: "v⃗ₜᵦ = d⃗ / Δt;  trên một trục: vₜᵦ = Δx / Δt", note: "Độ dịch chuyển có dấu theo chiều dương đã chọn." },
      { name: "Đổi đơn vị", formula: "1 m/s = 3,6 km/h", note: "Đổi km/h sang m/s thì chia 3,6; đổi m/s sang km/h thì nhân 3,6." },
      { name: "Vận tốc tương đối", formula: "v⃗A/C = v⃗A/B + v⃗B/C", note: "Dùng cùng một trục và quy ước chiều trước khi cộng vận tốc." }
    ],
    practical: "Khi tàu chạy xuôi dòng, vận tốc dòng nước làm ca nô đi nhanh hơn so với bờ; khi ngược dòng, vận tốc dòng nước làm giảm tốc độ của ca nô so với bờ.",
    example: {
      problem: "Một người đi 40 m về phía Đông, sau đó đi 10 m về phía Tây trong 10 s. Chọn chiều Đông là chiều dương. Tính tốc độ trung bình và vận tốc trung bình.",
      steps: [
        "Tổng quãng đường là 40 + 10 = 50 m nên tốc độ trung bình bằng 50/10 = 5 m/s.",
        "Độ dịch chuyển là +40 − 10 = +30 m.",
        "Vận tốc trung bình là +30/10 = +3 m/s, hướng Đông."
      ],
      answer: "Tốc độ 5 m/s; vận tốc +3 m/s."
    },
    simulation: null,
    questions: [],
    summaryPoints: [
      "Tốc độ trung bình dùng tổng quãng đường; vận tốc trung bình dùng độ dịch chuyển.",
      "Vận tốc là đại lượng vectơ; dấu biểu thị chiều theo quy ước.",
      "Độ lớn vận tốc trung bình không vượt quá tốc độ trung bình.",
      "Cộng vận tốc tương đối bằng vectơ và thống nhất hệ quy chiếu."
    ]
  },
  {
    id: "measuring-speed",
    category: "Thực hành",
    level: "Lớp 10 · Kết nối tri thức",
    duration: "20 phút",
    icon: "⏱️",
    title: "Bài 6: Thực hành đo tốc độ của vật chuyển động",
    summary: "Bố trí dụng cụ, đo quãng đường và thời gian, rồi xử lí số liệu để xác định tốc độ.",
    intro: "Đo tốc độ bằng thực nghiệm cần xác định quãng đường vật đi và thời gian chuyển động tương ứng. Chọn mốc rõ ràng, lặp lại phép đo và sử dụng cổng quang điện đúng chế độ sẽ giúp kết quả đáng tin cậy hơn.",
    objectives: [
      "Nêu được mục đích và các dụng cụ cơ bản của thí nghiệm đo tốc độ.",
      "Đo quãng đường, thời gian và tính tốc độ trung bình.",
      "Mô tả cách dùng cổng quang điện và đồng hồ hiện số.",
      "Nhận biết nguồn sai số và trình bày kết quả thí nghiệm."
    ],
    core: [
      { title: "Đại lượng cần đo", text: "Tốc độ được tính từ quãng đường vật đi được và khoảng thời gian tương ứng. Cần đo đúng đoạn đường, đúng thời điểm bắt đầu và kết thúc." },
      { title: "Đo thủ công", text: "Dùng thước đo chiều dài quãng đường và đồng hồ bấm giây đo thời gian. Phản xạ khi bấm nút có thể gây sai số, vì vậy nên lặp lại phép đo." },
      { title: "Cổng quang điện", text: "Cổng quang điện phát hiện vật chắn tia sáng và gửi tín hiệu đến đồng hồ đo thời gian hiện số. Hai cổng cách nhau một khoảng đã biết có thể dùng để đo thời gian vật đi giữa chúng." },
      { title: "Tốc độ tức thời gần đúng", text: "Thời gian một vật có kích thước đã biết chắn tia sáng có thể dùng để ước tính tốc độ tại cổng. Cần chọn đúng đại lượng chiều dài của vật và thời gian chắn cổng." },
      { title: "Báo cáo thí nghiệm", text: "Báo cáo nên có mục đích, dụng cụ, cách bố trí, quy trình, bảng số liệu, cách tính và kết quả kèm đơn vị, sai số phù hợp." }
    ],
    nature: "Kết quả đo chỉ có ý nghĩa khi quãng đường và thời gian được xác định nhất quán, dụng cụ được bố trí ổn định và đơn vị được ghi đầy đủ.",
    guideLabel: "Công thức thực hành",
    guideTitle: "Tính tốc độ từ số liệu đo",
    formulas: [
      { name: "Tốc độ trung bình trên đoạn đo", formula: "vₜᵦ = s / Δt", note: "s là khoảng cách giữa hai mốc; Δt là thời gian vật đi từ mốc đầu đến mốc cuối." },
      { name: "Tốc độ qua một cổng quang điện", formula: "v ≈ d / Δt", note: "d là chiều dài vật chắn tia (ví dụ đường kính viên bi); Δt là thời gian chắn cổng." },
      { name: "Giá trị trung bình", formula: "t̄ = (t₁ + t₂ + … + tₙ) / n", note: "Lặp lại cùng phép đo trong điều kiện tương tự; ghi rõ đơn vị và độ chính xác." }
    ],
    practical: "Trong bộ thí nghiệm viên bi trên máng, nam châm điện giữ và thả bi; cổng quang điện nhận biết thời điểm bi đi qua để đồng hồ ghi khoảng thời gian.",
    example: {
      problem: "Hai cổng quang điện cách nhau 0,50 m. Viên bi đi từ cổng A đến cổng B trong 0,25 s. Tính tốc độ trung bình trên đoạn đo.",
      steps: [
        "Xác định quãng đường s = 0,50 m và thời gian Δt = 0,25 s.",
        "Áp dụng công thức v = s/Δt = 0,50/0,25.",
        "Ghi kết quả với đơn vị m/s."
      ],
      answer: "v = 2,0 m/s."
    },
    simulation: null,
    questions: [],
    summaryPoints: [
      "Đo tốc độ cần xác định quãng đường và thời gian tương ứng.",
      "Cổng quang điện giúp ghi thời điểm vật chắn tia, giảm sai số bấm giờ bằng tay.",
      "Tốc độ trung bình v = s/Δt; tốc độ qua cổng có thể ước tính bằng d/Δt.",
      "Lặp lại phép đo, ghi đơn vị và trình bày quy trình trong báo cáo."
    ]
  }
];
