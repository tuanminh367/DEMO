const physicsQuizExtensions = {
  kinematics: {
    multipleChoice: [
      ["Một vật bắt đầu tại x₀ = 1 m và chuyển động thẳng đều với v = 2 m/s. Sau 3 s, vật ở vị trí nào?", ["5 m", "7 m", "6 m", "3 m"], 1, "x = x₀ + vt = 1 + 2×3 = 7 m."],
      ["Đổi 72 km/h sang m/s được:", ["7,2 m/s", "20 m/s", "25,9 m/s", "72 m/s"], 1, "Đổi km/h sang m/s bằng cách chia cho 3,6: 72/3,6 = 20 m/s."],
      ["Trong khoảng thời gian vật đứng yên, đồ thị vị trí–thời gian là:", ["Đường ngang", "Đường thẳng dốc lên", "Đường cong đi xuống", "Đường thẳng đứng"], 0, "Vị trí không đổi theo thời gian nên đồ thị là đường ngang."],
      ["Chọn chiều đông là chiều dương. Vận tốc −4 m/s có nghĩa vật:", ["Đi về phía đông với tốc độ 4 m/s", "Đi về phía tây với tốc độ 4 m/s", "Đứng yên", "Tăng tốc về phía đông"], 1, "Dấu âm chỉ chiều ngược với chiều dương đã chọn."],
      ["Hai xe đi cùng một quãng đường, xe A mất 20 s và xe B mất 30 s. Xe nào có tốc độ trung bình lớn hơn?", ["Xe A", "Xe B", "Bằng nhau", "Không thể so sánh"], 0, "Với cùng quãng đường, thời gian ngắn hơn tương ứng tốc độ trung bình lớn hơn."],
      ["Một vật chuyển động theo chiều âm với vận tốc không đổi. Đồ thị x theo t có:", ["Độ dốc âm", "Độ dốc dương", "Độ dốc bằng 0", "Độ dốc luôn vô hạn"], 0, "Độ dốc của đồ thị x–t bằng vận tốc, nên vận tốc âm cho độ dốc âm."],
      ["Một người đi 100 m trong 20 s rồi nghỉ 10 s. Tốc độ trung bình tính trong cả 30 s là:", ["5 m/s", "3,3 m/s", "4 m/s", "0 m/s"], 1, "Tổng quãng đường 100 m chia cho toàn bộ 30 s: 100/30 ≈ 3,3 m/s."],
      ["Trong một hệ quy chiếu, vật có vị trí đầu và vị trí cuối trùng nhau. Độ dịch chuyển của vật là:", ["Bằng tổng quãng đường", "Bằng 0", "Luôn âm", "Không xác định được"], 1, "Độ dịch chuyển chỉ phụ thuộc vị trí đầu và cuối; hai vị trí trùng nhau nên bằng 0."],
      ["Một xe chuyển động thẳng đều 4 m/s trong 25 s. Quãng đường xe đi được là:", ["6,25 m", "21 m", "100 m", "625 m"], 2, "s = vt = 4×25 = 100 m."],
      ["Đơn vị SI của vận tốc là:", ["m/s", "m/s²", "kg·m/s", "N"], 0, "Vận tốc là độ dài chia cho thời gian, có đơn vị SI là m/s."],
      ["Nếu chọn vật mốc là hành khách ngồi cạnh, hành khách trên xe buýt đang chạy có thể được xem là:", ["Đứng yên so với người ngồi cạnh", "Chuyển động so với ghế", "Không có vị trí", "Chuyển động cùng tốc độ với đường"], 0, "Chuyển động phụ thuộc hệ quy chiếu; hai hành khách cùng xe có vị trí tương đối không đổi."],
      ["Một vận động viên chạy 400 m trong 80 s. Tốc độ trung bình của vận động viên là:", ["0,2 m/s", "5 m/s", "32 m/s", "480 m/s"], 1, "v_tb = 400/80 = 5 m/s."]
    ],
    trueFalse: [
      { title: "Quãng đường, độ dịch chuyển và vật mốc", statements: [
        ["Quãng đường là đại lượng vô hướng.", true, "Quãng đường chỉ có độ lớn, không có hướng."],
        ["Độ dịch chuyển luôn bằng quãng đường.", false, "Chúng chỉ bằng nhau trong một số chuyển động không đổi chiều."],
        ["Một vật đứng yên trong hệ quy chiếu này có thể chuyển động trong hệ quy chiếu khác.", true, "Chuyển động có tính tương đối và phụ thuộc vật mốc."],
        ["Độ dịch chuyển sau một vòng kín luôn bằng chu vi quỹ đạo.", false, "Vật trở về điểm đầu nên độ dịch chuyển bằng 0."]
      ]},
      { title: "Vận tốc và đồ thị", statements: [
        ["Vận tốc có thể mang dấu âm theo quy ước chiều.", true, "Dấu âm thể hiện hướng ngược chiều dương."],
        ["Độ dốc đồ thị vị trí–thời gian bằng gia tốc.", false, "Độ dốc đồ thị x–t bằng vận tốc; gia tốc liên quan độ dốc đồ thị v–t."],
        ["Đồ thị vị trí–thời gian nằm ngang biểu thị vật đứng yên.", true, "Vị trí không đổi theo thời gian."],
        ["Tốc độ trung bình bằng tổng quãng đường chia tổng thời gian.", true, "Đây là định nghĩa tốc độ trung bình."]
      ]},
      { title: "Chuyển động thẳng đều", statements: [
        ["Trong chuyển động thẳng đều, vận tốc không đổi.", true, "Cả độ lớn và hướng vận tốc không đổi."],
        ["Vật chuyển động thẳng đều luôn xuất phát từ gốc tọa độ.", false, "Vị trí đầu x₀ có thể khác 0."],
        ["Nếu v = 0 trong suốt khoảng xét thì vị trí vật không đổi.", true, "Vận tốc bằng 0 nghĩa là không có độ dịch chuyển trong khoảng đó."],
        ["Đơn vị của gia tốc trong SI là m/s.", false, "Gia tốc có đơn vị m/s²."]
      ]}
    ],
    shortAnswer: [
      { question: "Một bạn đi 180 m trong 60 s. Tính tốc độ trung bình, đơn vị m/s.", acceptedAnswers: ["3", "3m/s"], expectedAnswer: "3 m/s", explanation: "v_tb = 180/60 = 3 m/s." },
      { question: "Vật ở x₀ = 5 m, chuyển động với v = −2 m/s trong 4 s. Tọa độ cuối x bằng bao nhiêu m?", acceptedAnswers: ["-3", "-3m"], expectedAnswer: "−3 m", explanation: "x = x₀ + vt = 5 + (−2)×4 = −3 m." }
    ]
  },
  dynamics: {
    multipleChoice: [
      ["Một hợp lực 15 N tác dụng lên vật 3 kg. Gia tốc của vật là:", ["5 m/s²", "45 m/s²", "12 m/s²", "0,2 m/s²"], 0, "a = F/m = 15/3 = 5 m/s²."],
      ["Khi hợp lực tác dụng lên vật bằng 0, vật đang chuyển động sẽ:", ["Dừng lại ngay", "Tiếp tục thẳng đều", "Tăng tốc", "Đổi chiều"], 1, "Theo định luật I Newton, vật giữ nguyên vận tốc khi hợp lực bằng 0."],
      ["Một quyển sách nằm yên trên bàn. Lực đỡ của bàn tác dụng lên sách hướng:", ["Thẳng đứng lên trên", "Thẳng đứng xuống dưới", "Ngang sang phải", "Theo chiều chuyển động"], 0, "Lực pháp tuyến của bàn đỡ sách hướng ra khỏi mặt bàn."],
      ["Lực ma sát trượt thường có hướng:", ["Cùng chiều trượt tương đối", "Ngược chiều trượt tương đối", "Luôn thẳng đứng", "Hướng về tâm Trái Đất"], 1, "Ma sát trượt cản trở chuyển động trượt tương đối giữa hai bề mặt."],
      ["Với cùng một hợp lực, vật có khối lượng lớn hơn thường có:", ["Gia tốc nhỏ hơn", "Gia tốc lớn hơn", "Gia tốc bằng nhau", "Vận tốc bằng 0"], 0, "Từ a = F/m, khi F không đổi thì m tăng làm a giảm."],
      ["Một vật có khối lượng 4 kg ở nơi g = 10 m/s². Trọng lượng của vật là:", ["0,4 N", "4 N", "40 N", "400 N"], 2, "P = mg = 4×10 = 40 N."],
      ["Cặp lực và phản lực theo định luật III Newton:", ["Đặt lên cùng một vật", "Luôn cùng chiều", "Đặt lên hai vật khác nhau", "Xuất hiện lần lượt"], 2, "Hai lực tương tác xuất hiện đồng thời và đặt lên hai vật khác nhau."],
      ["Một vật chịu hai lực cùng phương 8 N và 3 N ngược chiều. Độ lớn hợp lực là:", ["11 N", "5 N", "24 N", "0 N"], 1, "Hai lực ngược chiều nên độ lớn hợp lực là hiệu 8−3 = 5 N."],
      ["Một vật 2 kg có gia tốc 3 m/s². Hợp lực tác dụng lên vật là:", ["1,5 N", "5 N", "6 N", "9 N"], 2, "ΣF = ma = 2×3 = 6 N."],
      ["Khi xe tăng tốc về phía trước, hợp lực theo phương ngang hướng:", ["Ra phía sau", "Về phía trước", "Thẳng đứng lên", "Bằng 0"], 1, "Gia tốc cùng hướng với hợp lực; xe tăng tốc về trước nên hợp lực hướng trước."],
      ["Đại lượng biểu hiện mức quán tính của vật là:", ["Khối lượng", "Nhiệt độ", "Thể tích", "Điện tích"], 0, "Khối lượng càng lớn, vật càng khó thay đổi vận tốc."],
      ["Nếu khối lượng giữ nguyên và hợp lực tăng gấp đôi thì độ lớn gia tốc:", ["Giảm một nửa", "Tăng gấp đôi", "Không đổi", "Tăng gấp bốn"], 1, "Theo a = F/m, gia tốc tỉ lệ thuận với hợp lực."]
    ],
    trueFalse: [
      { title: "Các định luật Newton", statements: [
        ["Gia tốc cùng hướng với hợp lực tác dụng lên vật.", true, "Theo định luật II Newton, vectơ a cùng hướng ΣF."],
        ["Nếu vật đang chạy thì chắc chắn có hợp lực cùng chiều chuyển động.", false, "Vật có thể chuyển động thẳng đều khi hợp lực bằng 0."],
        ["Lực và phản lực có độ lớn bằng nhau.", true, "Đây là một phần của định luật III Newton."],
        ["Lực và phản lực tác dụng lên cùng một vật nên triệt tiêu nhau.", false, "Chúng đặt lên hai vật khác nhau."]
      ]},
      { title: "Khối lượng, trọng lượng và ma sát", statements: [
        ["Khối lượng đo bằng kilôgam trong hệ SI.", true, "Kilôgam là đơn vị SI của khối lượng."],
        ["Trọng lượng là lực hấp dẫn tác dụng lên vật.", true, "Gần mặt đất, độ lớn trọng lượng P = mg."],
        ["Trọng lượng của vật luôn bằng số đo khối lượng của vật.", false, "Trọng lượng tính bằng N, khối lượng tính bằng kg."],
        ["Ma sát trượt thường cản trở sự trượt giữa hai bề mặt.", true, "Lực ma sát hướng ngược chiều chuyển động trượt tương đối."]
      ]},
      { title: "Hợp lực và gia tốc", statements: [
        ["Một vật đứng yên có thể chịu các lực nhưng hợp lực bằng 0.", true, "Các lực cân bằng nhau có thể giữ vật đứng yên."],
        ["Với cùng hợp lực, khối lượng tăng thì gia tốc tăng.", false, "a = F/m nên khối lượng tăng làm gia tốc giảm."],
        ["Đơn vị SI của lực là niutơn (N).", true, "1 N = 1 kg·m/s²."],
        ["Lực pháp tuyến luôn bằng trọng lượng trong mọi tình huống.", false, "Giá trị lực pháp tuyến phụ thuộc cách đặt vật và các lực khác."]
      ]}
    ],
    shortAnswer: [
      { question: "Hợp lực 18 N tác dụng lên vật 6 kg. Tính gia tốc, đơn vị m/s².", acceptedAnswers: ["3", "3m/s2", "3m/s²"], expectedAnswer: "3 m/s²", explanation: "a = F/m = 18/6 = 3 m/s²." },
      { question: "Vật khối lượng 7 kg ở nơi có g = 10 m/s². Tính trọng lượng, đơn vị N.", acceptedAnswers: ["70", "70n"], expectedAnswer: "70 N", explanation: "P = mg = 7×10 = 70 N." }
    ]
  },
  "work-energy": {
    multipleChoice: [
      ["Lực 10 N kéo vật đi 3 m cùng hướng lực. Công của lực là:", ["3 J", "13 J", "30 J", "0 J"], 2, "W = Fs = 10×3 = 30 J."],
      ["Lực ma sát ngược chiều chuyển động thường sinh công:", ["Dương", "Âm", "Bằng công suất", "Luôn bằng 0"], 1, "Góc giữa lực ma sát và độ dời là 180°, cosθ âm."],
      ["Đơn vị SI của công và năng lượng là:", ["W", "J", "N", "Pa"], 1, "Công và năng lượng đều đo bằng jun (J)."],
      ["Một máy thực hiện công 600 J trong 3 s. Công suất trung bình là:", ["200 W", "1800 W", "2 W", "603 W"], 0, "P = W/t = 600/3 = 200 W."],
      ["Vật khối lượng 2 kg chuyển động 5 m/s có động năng:", ["10 J", "25 J", "50 J", "5 J"], 1, "Wđ = ½mv² = ½×2×25 = 25 J."],
      ["Khi nâng vật lên cao hơn so với mốc thế năng, thế năng trọng trường:", ["Tăng", "Giảm", "Luôn bằng 0", "Không phụ thuộc độ cao"], 0, "Wt = mgh tăng khi h tăng."],
      ["Một lực vuông góc độ dời sinh công:", ["Bằng Fs", "Bằng 0", "Âm vô hạn", "Bằng mgh"], 1, "cos 90° = 0 nên công bằng 0."],
      ["Bỏ qua lực cản, vật rơi xuống thì đại lượng nào chuyển hóa chủ yếu thành động năng?", ["Thế năng trọng trường", "Điện trở", "Khối lượng", "Công suất"], 0, "Thế năng giảm và động năng tăng trong khi cơ năng bảo toàn."],
      ["Nếu tốc độ tăng gấp 3 lần, động năng tăng:", ["3 lần", "6 lần", "9 lần", "Không đổi"], 2, "Động năng tỉ lệ với bình phương tốc độ."],
      ["Một vật 1 kg được nâng cao 4 m, lấy g = 10 m/s². Độ tăng thế năng là:", ["4 J", "10 J", "40 J", "400 J"], 2, "ΔWt = mgΔh = 1×10×4 = 40 J."],
      ["Một lực 20 N kéo vật 2 m, góc giữa lực và độ dời 60°. Công của lực là:", ["40 J", "20 J", "10 J", "0 J"], 1, "W = Fs cos60° = 20×2×0,5 = 20 J."],
      ["Khi có ma sát, cơ năng của vật có thể giảm vì một phần chuyển thành:", ["Nhiệt năng", "Khối lượng", "Độ dịch chuyển", "Điện tích"], 0, "Ma sát làm một phần cơ năng chuyển hóa thành nhiệt năng."]
    ],
    trueFalse: [
      { title: "Công của lực", statements: [
        ["Công phụ thuộc thành phần lực theo hướng độ dời.", true, "W = Fs cosθ."],
        ["Lực vuông góc với độ dời sinh công cực đại.", false, "Khi θ = 90°, công bằng 0."],
        ["Lực cản chuyển động thường sinh công âm.", true, "Lực cản ngược chiều độ dời."],
        ["Công có đơn vị SI là niutơn.", false, "Công đo bằng jun (J)."]
      ]},
      { title: "Động năng và thế năng", statements: [
        ["Động năng phụ thuộc khối lượng và bình phương tốc độ.", true, "Wđ = ½mv²."],
        ["Thế năng trọng trường không phụ thuộc mốc chọn.", false, "Giá trị thế năng phụ thuộc mốc, độ biến thiên thì không."],
        ["Nâng vật lên cao hơn thường làm thế năng trọng trường tăng.", true, "Wt = mgh với h đo theo mốc đã chọn."],
        ["Vật đứng yên chắc chắn không có thế năng.", false, "Vật đứng yên vẫn có thể ở độ cao so với mốc."]
      ]},
      { title: "Bảo toàn năng lượng", statements: [
        ["Bỏ qua lực cản, cơ năng của vật rơi tự do được bảo toàn.", true, "Thế năng đổi thành động năng."],
        ["Ma sát làm tổng năng lượng của vũ trụ biến mất.", false, "Năng lượng chuyển hóa, không bị mất đi."],
        ["Công suất cho biết tốc độ thực hiện công.", true, "P = W/t."],
        ["Jun là đơn vị SI của công suất.", false, "Jun là đơn vị năng lượng; công suất đo bằng oát."]
      ]}
    ],
    shortAnswer: [
      { question: "Lực 8 N cùng hướng làm vật dịch chuyển 5 m. Công của lực là bao nhiêu J?", acceptedAnswers: ["40", "40j"], expectedAnswer: "40 J", explanation: "W = Fs = 8×5 = 40 J." },
      { question: "Một vật 3 kg được nâng cao 2 m, lấy g = 10 m/s². Thế năng tăng bao nhiêu J?", acceptedAnswers: ["60", "60j"], expectedAnswer: "60 J", explanation: "ΔWt = mgΔh = 3×10×2 = 60 J." }
    ]
  }
};
