const physicsLessons = [
  {
    id: "kinematics",
    category: "Cơ học",
    level: "Lớp 10",
    duration: "12 phút",
    icon: "🏃",
    title: "Bài 1: Mô tả chuyển động",
    summary: "Dùng vị trí, độ dịch chuyển và vận tốc để kể câu chuyện một vật đang chuyển động.",
    intro: "Động học mô tả vật chuyển động như thế nào mà chưa cần tìm nguyên nhân gây ra chuyển động. Từ hành trình đi học đến xe buýt, ta có thể dùng số liệu và đồ thị để mô tả chuyển động một cách rõ ràng.",
    objectives: [
      "Phân biệt quãng đường và độ dịch chuyển.",
      "Tính tốc độ trung bình và vận tốc trong chuyển động thẳng đều.",
      "Đọc ý nghĩa độ dốc của đồ thị vị trí theo thời gian."
    ],
    core: [
      { title: "Chọn vật mốc", text: "Muốn nói một vật đang chuyển động hay đứng yên, cần chọn vật mốc và hệ quy chiếu. Người ngồi trên xe đứng yên so với ghế nhưng chuyển động so với mặt đường." },
      { title: "Quãng đường và độ dịch chuyển", text: "Quãng đường là tổng chiều dài đường đi, luôn không âm. Độ dịch chuyển là độ thay đổi vị trí có hướng; khi vật quay về chỗ cũ, độ dịch chuyển bằng 0 dù quãng đường vẫn lớn hơn 0." },
      { title: "Tốc độ và vận tốc", text: "Tốc độ cho biết quãng đường đi được trong một đơn vị thời gian. Vận tốc còn cho biết hướng chuyển động; trong chuyển động thẳng đều, vận tốc không đổi." }
    ],
    nature: "Nếu trong các khoảng thời gian bằng nhau vật đi được những quãng đường bằng nhau, chuyển động là thẳng đều. Trên đồ thị vị trí–thời gian, độ dốc càng lớn thì độ lớn vận tốc càng lớn; độ dốc âm thể hiện vật chuyển động theo chiều âm đã chọn.",
    formulas: [
      { name: "Tốc độ trung bình", formula: "v_tb = s / Δt", note: "s tính bằng mét (m), Δt bằng giây (s), v_tb bằng mét trên giây (m/s)." },
      { name: "Độ dịch chuyển trong chuyển động thẳng đều", formula: "Δx = v · Δt", note: "Δx có dấu theo chiều đã chọn; v có thể dương hoặc âm." },
      { name: "Phương trình vị trí", formula: "x = x₀ + v · t", note: "x₀ là vị trí ban đầu (m), t là thời gian (s), v là vận tốc (m/s)." }
    ],
    practical: "Ứng dụng bản đồ trên điện thoại so sánh vị trí của bạn theo thời gian để ước tính tốc độ và thời điểm đến nơi.",
    example: {
      problem: "Một bạn đi xe đạp được 900 m trong 3 phút với tốc độ không đổi. Tốc độ của bạn bằng bao nhiêu m/s?",
      steps: ["Đổi thời gian: 3 phút = 180 s.", "Dùng v = s / Δt = 900 / 180."],
      answer: "v = 5 m/s."
    },
    simulation: "motion",
    questions: [
      { question: "Một người đi 60 m về phía đông rồi 60 m về phía tây để về điểm xuất phát. Quãng đường và độ dịch chuyển lần lượt là:", options: ["120 m và 0 m", "0 m và 120 m", "60 m và 60 m", "120 m và 120 m"], correct: 0, explanation: "Quãng đường cộng cả hai chặng là 120 m; vị trí cuối trùng vị trí đầu nên độ dịch chuyển bằng 0." },
      { question: "Trên đồ thị vị trí–thời gian của chuyển động thẳng đều, độ dốc biểu thị:", options: ["Khối lượng", "Vận tốc", "Lực tác dụng", "Nhiệt độ"], correct: 1, explanation: "Độ dốc Δx/Δt chính là vận tốc theo trục đã chọn." },
      { question: "Một xe đi được 150 m trong 10 s. Tốc độ trung bình của xe là:", options: ["1,5 m/s", "15 m/s", "1500 m/s", "0,067 m/s"], correct: 1, explanation: "v_tb = 150/10 = 15 m/s." }
    ],
    summaryPoints: ["Chuyển động phụ thuộc vào vật mốc.", "Quãng đường khác độ dịch chuyển.", "Độ dốc đồ thị vị trí–thời gian cho biết vận tốc."]
  },
  {
    id: "dynamics",
    category: "Cơ học",
    level: "Lớp 10",
    duration: "14 phút",
    icon: "🧲",
    title: "Bài 2: Lực và các định luật Newton",
    summary: "Tìm hiểu vì sao vật đổi chuyển động và cách lực tương tác xuất hiện thành từng cặp.",
    intro: "Một cú đẩy làm xe đồ chơi tăng tốc, còn phanh xe làm xe chậm lại. Động lực học liên hệ lực tác dụng với sự thay đổi chuyển động của vật.",
    objectives: ["Nhận biết hợp lực và quán tính.", "Vận dụng định luật II Newton để tính gia tốc.", "Phân biệt khối lượng với trọng lượng và nhận biết cặp lực tương tác."],
    core: [
      { title: "Quán tính", text: "Nếu hợp lực tác dụng lên vật bằng 0, vật giữ nguyên trạng thái đứng yên hoặc chuyển động thẳng đều. Đây là biểu hiện của quán tính." },
      { title: "Hợp lực làm đổi chuyển động", text: "Gia tốc cùng hướng với hợp lực; gia tốc tăng khi hợp lực tăng và giảm khi khối lượng tăng." },
      { title: "Lực tương tác", text: "Hai vật tác dụng lực lên nhau cùng lúc. Hai lực này bằng nhau về độ lớn, ngược chiều và đặt lên hai vật khác nhau nên không triệt tiêu nhau." }
    ],
    nature: "Lực không duy trì chuyển động đều; lực tổng hợp khác 0 mới làm vận tốc thay đổi. Vì vậy, xe đang chạy trên đường cần lực kéo để bù lại lực cản và giữ tốc độ ổn định.",
    formulas: [
      { name: "Định luật II Newton", formula: "ΣF = m · a", note: "ΣF tính bằng niutơn (N), m bằng kilôgam (kg), a bằng mét trên giây bình phương (m/s²)." },
      { name: "Trọng lượng gần mặt đất", formula: "P = m · g", note: "P là trọng lượng (N), m là khối lượng (kg), g ≈ 9,8 m/s² (thường lấy 10 m/s² khi tính gần đúng)." }
    ],
    practical: "Dây an toàn trên ô tô giữ cơ thể không tiếp tục lao về phía trước theo quán tính khi xe phanh gấp.",
    example: {
      problem: "Một xe đẩy khối lượng 4 kg chịu hợp lực 12 N theo phương ngang. Bỏ qua ma sát, gia tốc của xe là bao nhiêu?",
      steps: ["Chọn chiều dương cùng chiều hợp lực.", "Từ ΣF = m·a, suy ra a = 12/4."],
      answer: "a = 3 m/s²."
    },
    simulation: "force",
    questions: [
      { question: "Một vật chuyển động thẳng đều trên mặt phẳng ngang. Hợp lực tác dụng lên vật bằng:", options: ["0 N", "m·v", "m·g", "Luôn lớn hơn 0 N"], correct: 0, explanation: "Chuyển động thẳng đều có gia tốc bằng 0, nên theo định luật II Newton hợp lực bằng 0." },
      { question: "Một vật có khối lượng 2 kg chịu hợp lực 6 N. Gia tốc của vật là:", options: ["12 m/s²", "3 m/s²", "4 m/s²", "0,33 m/s²"], correct: 1, explanation: "a = F/m = 6/2 = 3 m/s²." },
      { question: "Trọng lượng của vật gần mặt đất phụ thuộc trực tiếp vào:", options: ["Màu sắc của vật", "Khối lượng và gia tốc trọng trường", "Tốc độ của vật", "Diện tích mặt tiếp xúc"], correct: 1, explanation: "P = m·g; khối lượng đo bằng kg, trọng lượng là lực đo bằng N." }
    ],
    summaryPoints: ["Hợp lực bằng 0 thì vận tốc không đổi.", "ΣF = m·a liên hệ lực với gia tốc.", "Hai lực tương tác đặt lên hai vật khác nhau."]
  },
  {
    id: "work-energy",
    category: "Cơ học",
    level: "Lớp 10",
    duration: "13 phút",
    icon: "⚡",
    title: "Bài 3: Công và năng lượng",
    summary: "Theo dõi năng lượng truyền đi, chuyển hóa và bảo toàn trong các chuyển động quen thuộc.",
    intro: "Khi nâng một chiếc cặp lên bàn, ta truyền năng lượng cho cặp. Khi cặp rơi xuống, năng lượng thế chuyển thành động năng.",
    objectives: ["Tính công của lực không đổi.", "Phân biệt động năng và thế năng trọng trường.", "Dùng định luật bảo toàn cơ năng trong điều kiện phù hợp."],
    core: [
      { title: "Công của lực", text: "Lực sinh công khi có thành phần cùng phương với độ dời. Lực vuông góc độ dời không sinh công; lực cản thường sinh công âm." },
      { title: "Động năng và thế năng", text: "Động năng gắn với chuyển động; thế năng trọng trường phụ thuộc độ cao được chọn làm mốc." },
      { title: "Chuyển hóa năng lượng", text: "Nếu chỉ có lực thế sinh công, tổng động năng và thế năng được bảo toàn. Có ma sát, một phần cơ năng chuyển thành nhiệt năng." }
    ],
    nature: "Năng lượng không tự mất đi: nó được truyền giữa các vật hoặc chuyển từ dạng này sang dạng khác. Ma sát làm cơ năng giảm nhưng tổng năng lượng của hệ và môi trường vẫn được bảo toàn.",
    formulas: [
      { name: "Công của lực không đổi", formula: "W = F · s · cos θ", note: "W tính bằng jun (J), F bằng niutơn (N), s bằng mét (m), θ là góc giữa lực và độ dời." },
      { name: "Động năng", formula: "W_đ = ½ · m · v²", note: "m tính bằng kg, v bằng m/s, W_đ bằng J." },
      { name: "Thế năng trọng trường", formula: "W_t = m · g · h", note: "h tính từ mốc thế năng (m); g ≈ 9,8 m/s²." }
    ],
    practical: "Tàu lượn lên cao tích trữ thế năng; khi xuống dốc, thế năng chuyển thành động năng làm tàu chạy nhanh hơn.",
    example: {
      problem: "Nâng một vật 2 kg lên cao thêm 1,5 m. Lấy g = 10 m/s². Thế năng trọng trường của vật tăng bao nhiêu?",
      steps: ["Độ tăng thế năng: ΔW_t = m·g·Δh.", "Thay số: 2 × 10 × 1,5."],
      answer: "ΔW_t = 30 J."
    },
    simulation: "energy",
    questions: [
      { question: "Một lực vuông góc với độ dời của vật sinh công bằng:", options: ["0 J", "F·s", "m·g·h", "½·m·v²"], correct: 0, explanation: "cos 90° = 0 nên W = F·s·cos 90° = 0." },
      { question: "Khi tốc độ của vật tăng gấp đôi, động năng của vật (khối lượng không đổi):", options: ["Tăng gấp đôi", "Tăng gấp bốn", "Giảm một nửa", "Không đổi"], correct: 1, explanation: "Wđ tỉ lệ với v²; (2v)² = 4v²." },
      { question: "Một vật rơi tự do, bỏ qua lực cản không khí. Trong quá trình rơi:", options: ["Thế năng tăng, động năng giảm", "Cơ năng giảm liên tục", "Thế năng chuyển dần thành động năng", "Khối lượng vật tăng"], correct: 2, explanation: "Khi độ cao giảm, thế năng giảm và động năng tăng; cơ năng được bảo toàn." }
    ],
    summaryPoints: ["Công là cách lực truyền năng lượng.", "Động năng phụ thuộc bình phương tốc độ.", "Cơ năng bảo toàn khi bỏ qua lực không bảo toàn như ma sát."]
  }
];
