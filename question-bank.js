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
      { question: "Bài học nêu bao nhiêu phương pháp nghiên cứu Vật lí chính?", acceptedAnswers: ["2"], expectedAnswer: "2", explanation: "Bài học giới thiệu hai phương pháp bổ trợ nhau: thực nghiệm và mô hình." },
      { question: "Lịch sử phát triển Vật lí được chia thành bao nhiêu giai đoạn?", acceptedAnswers: ["3"], expectedAnswer: "3", explanation: "Ba giai đoạn gồm tiền Vật lí, Vật lí cổ điển và Vật lí hiện đại." }
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
      { question: "Sau khi thực hành, quy trình nêu bao nhiêu việc cần làm?", acceptedAnswers: ["3"], expectedAnswer: "3", explanation: "Sau khi thực hành, cần tắt nguồn, thu dọn dụng cụ và rửa tay." },
      { question: "Bài học nêu bao nhiêu nhóm biển báo an toàn?", acceptedAnswers: ["4"], expectedAnswer: "4", explanation: "Bài học nêu biển cảnh báo, biển cấm, biển bắt buộc và biển chỉ dẫn an toàn."}
    ]
  },
  "displacement-distance": {
    multipleChoiceOnly: true,
    illustrations: {
      figure1: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 260" role="img" aria-label="Hình 1: A tại gốc tọa độ, đi ngang 3 mét đến B rồi đi lên 4 mét đến C; vectơ độ dịch chuyển nối A với C">
          <path d="M90 205V47M65 170H300M90 47l-5 10m5-10 5 10M300 170l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="304" y="174" fill="#CBD5E1" font-size="12">x (m)</text><text x="96" y="50" fill="#CBD5E1" font-size="12">y (m)</text>
          <path d="M90 170H150V90" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M124 166l9 4-9 4M146 111l4-9 4 9" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <path d="M94 166L144 99" fill="none" stroke="#22D3EE" stroke-width="3"/>
          <path d="M138 102l9-8-2 12" fill="#22D3EE"/>
          <circle cx="90" cy="170" r="4" fill="#F8FAFC"/><circle cx="150" cy="170" r="4" fill="#F8FAFC"/><circle cx="150" cy="90" r="4" fill="#F8FAFC"/>
          <text x="43" y="190" fill="#F8FAFC" font-size="11">A (0; 0)</text><text x="133" y="192" fill="#F8FAFC" font-size="11">B (3; 0)</text><text x="157" y="86" fill="#F8FAFC" font-size="11">C (3; 4)</text>
          <text x="111" y="162" fill="#FBBF24" font-size="11">3 m</text><text x="157" y="133" fill="#FBBF24" font-size="11">4 m</text>
          <path d="M80 232h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="236" fill="#CBD5E1" font-size="10">đường đi</text>
          <path d="M202 232h34" stroke="#22D3EE" stroke-width="3"/><path d="M231 228l8 4-8 4" fill="#22D3EE"/><text x="244" y="236" fill="#CBD5E1" font-size="10">độ dịch chuyển</text>
        </svg><figcaption>Hình 1 · AB = 3 m, BC = 4 m</figcaption>
      </figure>`,
      figure2: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 260" role="img" aria-label="Hình 2: hành trình khép kín quanh hình chữ nhật dài 4 mét, rộng 3 mét; điểm đầu và cuối là A">
          <path d="M90 205V38M65 170H300M90 38l-5 10m5-10 5 10M300 170l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="304" y="174" fill="#CBD5E1" font-size="12">x (m)</text><text x="96" y="41" fill="#CBD5E1" font-size="12">y (m)</text>
          <path d="M90 170H250V50H90Z" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M153 166l9 4-9 4M246 112l4-9 4 9M182 54l-9-4 9-4M94 107l-4 9-4-9" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <circle cx="90" cy="170" r="6" fill="#22D3EE"/><circle cx="250" cy="170" r="4" fill="#F8FAFC"/><circle cx="250" cy="50" r="4" fill="#F8FAFC"/><circle cx="90" cy="50" r="4" fill="#F8FAFC"/>
          <text x="51" y="191" fill="#F8FAFC" font-size="11">A (0; 0)</text><text x="253" y="190" fill="#F8FAFC" font-size="11">B (4; 0)</text>
          <text x="253" y="47" fill="#F8FAFC" font-size="11">C (4; 3)</text><text x="47" y="47" fill="#F8FAFC" font-size="11">D (0; 3)</text>
          <text x="160" y="190" fill="#FBBF24" font-size="11">4 m</text><text x="258" y="113" fill="#FBBF24" font-size="11">3 m</text>
          <text x="101" y="158" fill="#22D3EE" font-size="10">đầu = cuối</text>
          <path d="M80 232h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="236" fill="#CBD5E1" font-size="10">đường đi một vòng</text>
        </svg><figcaption>Hình 2 · Chu vi hình chữ nhật 4 m × 3 m</figcaption>
      </figure>`,
      figure3: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 260" role="img" aria-label="Hình 3: A tại gốc tọa độ, đi lên 6 mét đến B rồi sang phải 8 mét đến C; vectơ độ dịch chuyển nối A với C">
          <path d="M90 205V47M65 170H300M90 47l-5 10m5-10 5 10M300 170l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="304" y="174" fill="#CBD5E1" font-size="12">x (m)</text><text x="96" y="50" fill="#CBD5E1" font-size="12">y (m)</text>
          <path d="M90 170V90H196" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M86 120l4-9 4 9M168 86l9 4-9 4" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <path d="M94 166L187 94" fill="none" stroke="#22D3EE" stroke-width="3"/>
          <path d="M181 94l11-6-4 12" fill="#22D3EE"/>
          <circle cx="90" cy="170" r="4" fill="#F8FAFC"/><circle cx="90" cy="90" r="4" fill="#F8FAFC"/><circle cx="196" cy="90" r="4" fill="#F8FAFC"/>
          <text x="43" y="190" fill="#F8FAFC" font-size="11">A (0; 0)</text><text x="43" y="86" fill="#F8FAFC" font-size="11">B (0; 6)</text><text x="199" y="86" fill="#F8FAFC" font-size="11">C (8; 6)</text>
          <text x="96" y="127" fill="#FBBF24" font-size="11">6 m</text><text x="137" y="84" fill="#FBBF24" font-size="11">8 m</text>
          <path d="M80 232h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="236" fill="#CBD5E1" font-size="10">đường đi</text>
          <path d="M202 232h34" stroke="#22D3EE" stroke-width="3"/><path d="M231 228l8 4-8 4" fill="#22D3EE"/><text x="244" y="236" fill="#CBD5E1" font-size="10">độ dịch chuyển</text>
        </svg><figcaption>Hình 3 · AB = 6 m, BC = 8 m</figcaption>
      </figure>`,
      figure4: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 240" role="img" aria-label="Hình 4: trên trục x, vật đi từ A ở 0 mét đến B ở 5 mét rồi quay về C ở 2 mét">
          <path d="M48 120H315M315 120l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="316" y="124" fill="#CBD5E1" font-size="12">x (m)</text>
          <path d="M65 120H265" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M205 116l9 4-9 4M158 116l-9 4 9 4" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <path d="M65 120V167M145 120V167M65 167H145" fill="none" stroke="#22D3EE" stroke-width="3"/>
          <path d="M137 163l9 4-9 4" fill="#22D3EE"/>
          <circle cx="65" cy="120" r="5" fill="#F8FAFC"/><circle cx="265" cy="120" r="5" fill="#F8FAFC"/><circle cx="145" cy="120" r="5" fill="#F8FAFC"/>
          <path d="M65 114v12M145 114v12M265 114v12" stroke="#CBD5E1" stroke-width="1"/>
          <text x="51" y="103" fill="#F8FAFC" font-size="11">A (0 m)</text><text x="249" y="103" fill="#F8FAFC" font-size="11">B (5 m)</text><text x="129" y="103" fill="#F8FAFC" font-size="11">C (2 m)</text>
          <text x="92" y="183" fill="#22D3EE" font-size="11">vectơ AC = 2 m</text>
          <text x="102" y="65" fill="#FBBF24" font-size="10">A → B</text><text x="179" y="65" fill="#FBBF24" font-size="10">B → C</text>
          <path d="M80 218h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="222" fill="#CBD5E1" font-size="10">đường đi, có đổi chiều</text>
          <path d="M239 218h34" stroke="#22D3EE" stroke-width="3"/><text x="280" y="222" fill="#CBD5E1" font-size="10">độ dịch chuyển</text>
        </svg><figcaption>Hình 4 · A = 0 m, B = 5 m, C = 2 m trên trục x</figcaption>
      </figure>`
    },
    multipleChoice: [
      ["Độ dịch chuyển là đại lượng cho biết điều gì?", ["Độ dài toàn bộ đường đi", "Sự thay đổi vị trí từ điểm đầu đến điểm cuối, kèm hướng", "Thời gian chuyển động", "Tốc độ của vật"], 1, "Độ dịch chuyển là vectơ nối vị trí đầu với vị trí cuối và có hướng.", 1],
      ["Độ dịch chuyển là đại lượng:", ["Vô hướng", "Vectơ", "Luôn dương", "Không xác định được chiều"], 1, "Độ dịch chuyển có cả độ lớn và hướng nên là đại lượng vectơ.", 4],
      ["Một vật đi thẳng theo một chiều, không quay đầu. Khi đó:", ["Quãng đường nhỏ hơn độ lớn độ dịch chuyển", "Quãng đường bằng độ lớn độ dịch chuyển", "Quãng đường bằng 0", "Độ dịch chuyển bằng 0"], 1, "Khi chuyển động thẳng một chiều, độ dài đường đi bằng độ lớn độ dịch chuyển.", 5],
      ["Để xác định vị trí của vật trên mặt phẳng, thông thường cần:", ["Một trục tọa độ", "Hệ tọa độ thích hợp", "Chỉ một đồng hồ", "Chỉ một thước đo thời gian"], 1, "Trên mặt phẳng cần hệ tọa độ phù hợp để xác định vị trí theo các phương.", 8],
      ["Một vật có thể được coi là chất điểm khi:", ["Kích thước vật bằng 0", "Kích thước của vật rất nhỏ so với phạm vi chuyển động đang xét", "Vật không có khối lượng", "Vật đứng yên"], 1, "Có thể coi vật là chất điểm khi kích thước của nó không đáng kể so với phạm vi chuyển động đang xét.", 10],
      ["Hệ quy chiếu thường bao gồm:", ["Hệ tọa độ và mốc thời gian", "Chỉ vật mốc", "Chỉ đồng hồ", "Chỉ quỹ đạo"], 0, "Hệ quy chiếu thường gồm hệ tọa độ gắn với vật mốc và mốc thời gian.", 13],
      ["Độ lớn độ dịch chuyển trong một hành trình luôn:", ["Lớn hơn hoặc bằng quãng đường", "Nhỏ hơn hoặc bằng quãng đường", "Bằng quãng đường", "Bằng 0"], 1, "Đoạn thẳng nối điểm đầu và điểm cuối không dài hơn đường đi thực tế.", 17],
      ["Phát biểu nào sau đây đúng?", ["Quãng đường phụ thuộc đường đi thực tế", "Độ dịch chuyển phụ thuộc mọi điểm trên đường đi", "Quãng đường có hướng", "Độ dịch chuyển luôn dương"], 0, "Quãng đường là tổng độ dài quỹ đạo vật đã đi, nên phụ thuộc đường đi thực tế.", 18],
      ["Khi vật chuyển động theo đường cong, độ dịch chuyển được biểu diễn bằng:", ["Độ dài đường cong", "Vectơ nối vị trí đầu với vị trí cuối", "Tổng độ dài các đoạn đường", "Chu vi quỹ đạo"], 1, "Độ dịch chuyển là vectơ nối vị trí đầu và vị trí cuối, không phải độ dài đường cong.", 19],
      ["Một bạn đi 120 m về phía Đông rồi 80 m về phía Đông. Quãng đường đi được là:", ["40 m", "80 m", "120 m", "200 m"], 3, "Quãng đường bằng tổng hai chặng cùng chiều: 120 + 80 = 200 m.", 21],
      ["Một người đi 300 m về phía Bắc rồi 100 m về phía Nam. Quãng đường là:", ["100 m", "200 m", "300 m", "400 m"], 3, "Quãng đường cộng cả hai chặng: 300 + 100 = 400 m.", 23],
      ["Một vật đi 6 m về Đông rồi 8 m về Bắc. Độ lớn độ dịch chuyển là:", ["2 m", "10 m", "14 m", "48 m"], 1, "Hai thành phần vuông góc nên độ dịch chuyển là √(6² + 8²) = 10 m.", 25],
      ["Một vật có vị trí đầu x₁ = −3 m và vị trí cuối x₂ = 7 m. Độ dịch chuyển là:", ["−10 m", "−4 m", "4 m", "10 m"], 3, "Δx = x₂ − x₁ = 7 − (−3) = 10 m.", 28],
      ["Vật đi từ x = 1 m đến x = 8 m, rồi quay về x = 5 m. Quãng đường là:", ["3 m", "7 m", "10 m", "13 m"], 2, "Quãng đường gồm 7 m đi ra và 3 m quay lại: 7 + 3 = 10 m.", 30],
      ["Một người đi 4 km về Bắc, 3 km về Đông, rồi 4 km về Nam. Độ lớn độ dịch chuyển là:", ["3 km", "4 km", "7 km", "11 km"], 0, "Hai chặng 4 km Bắc và 4 km Nam triệt tiêu; còn lại độ dịch chuyển 3 km về Đông.", 32],
      ["Một vật đi 10 m về phía Đông rồi 10 m về phía Tây. Quãng đường và độ dịch chuyển lần lượt là:", ["0 m; 20 m", "20 m; 0 m", "10 m; 10 m", "20 m; 20 m"], 1, "Quãng đường là 10 + 10 = 20 m; vật trở về điểm đầu nên độ dịch chuyển bằng 0.", 40],
      ["Một người đi từ A đến B 6 km, rồi B đến C 8 km vuông góc với AB. Độ lớn độ dịch chuyển AC là:", ["2 km", "10 km", "14 km", "48 km"], 1, "AC = √(6² + 8²) = 10 km theo định lí Pythagore.", 45],
      ["Quan sát Hình 1. Quãng đường đi từ A đến C theo đường A–B–C là:", ["3 m", "4 m", "7 m", "5 m"], 2, "Quãng đường theo A–B–C là AB + BC = 3 + 4 = 7 m.", 46, "figure1"],
      ["Quan sát Hình 1. Độ lớn độ dịch chuyển từ A đến C là:", ["3 m", "4 m", "5 m", "7 m"], 2, "Độ dịch chuyển AC là cạnh huyền của tam giác vuông có cạnh 3 m và 4 m: AC = 5 m.", 47, "figure1"],
      ["Quan sát Hình 2. Sau một vòng khép kín, quãng đường đi được là:", ["0 m", "10 m", "14 m", "12 m"], 2, "Một vòng hình chữ nhật dài 4 m, rộng 3 m có chu vi 2(4 + 3) = 14 m.", 49, "figure2"],
      ["Quan sát Hình 2. Sau khi đi hết một vòng, độ dịch chuyển là:", ["0 m", "10 m", "14 m", "24 m"], 0, "Sau một vòng khép kín, điểm đầu trùng điểm cuối nên độ dịch chuyển bằng 0 m.", 50, "figure2"],
      ["Quan sát Hình 3. Quãng đường đi theo A–B–C là:", ["6 m", "8 m", "10 m", "14 m"], 3, "Quãng đường theo A–B–C là AB + BC = 6 + 8 = 14 m.", 51, "figure3"],
      ["Quan sát Hình 3. Độ lớn độ dịch chuyển AC là:", ["2 m", "10 m", "12 m", "14 m"], 1, "AC = √(6² + 8²) = 10 m vì hai chặng vuông góc.", 52, "figure3"],
      ["Quan sát Hình 4. Quãng đường đi từ A đến B rồi về C là:", ["2 m", "3 m", "5 m", "8 m"], 3, "AB = 5 m và BC = 5 − 2 = 3 m; tổng quãng đường là 5 + 3 = 8 m.", 54, "figure4"],
      ["Quan sát Hình 4. Độ lớn độ dịch chuyển từ A đến C là:", ["2 m", "3 m", "5 m", "7 m"], 0, "A ở 0 m, C ở 2 m nên độ lớn độ dịch chuyển là |2 − 0| = 2 m.", 55, "figure4"],
      ["Một vật đi theo đường gấp khúc có hai cạnh vuông góc 9 m và 12 m. Độ lớn độ dịch chuyển là:", ["3 m", "15 m", "21 m", "108 m"], 1, "Độ dịch chuyển là √(9² + 12²) = 15 m.", 57],
      ["Nếu hai vectơ độ dịch chuyển vuông góc có độ lớn 5 m và 12 m thì độ lớn vectơ tổng hợp là:", ["7 m", "13 m", "17 m", "60 m"], 1, "Độ lớn vectơ tổng hợp là √(5² + 12²) = 13 m.", 58],
      ["Trong Hình 2, điểm đầu và điểm cuối trùng nhau nên:", ["Quãng đường bằng độ dịch chuyển", "Độ dịch chuyển bằng 0", "Quãng đường bằng 0", "Độ dịch chuyển bằng chu vi"], 1, "Hình 2 là hành trình khép kín nên điểm đầu và điểm cuối trùng nhau, độ dịch chuyển bằng 0.", 60, "figure2"],
      ["Một vật đi 8 m về Đông rồi 15 m về Bắc. Độ lớn độ dịch chuyển là:", ["7 m", "17 m", "23 m", "120 m"], 1, "Hai hướng vuông góc nên độ dịch chuyển là √(8² + 15²) = 17 m.", 97],
      ["Một người đi 3 km về Đông, 4 km về Bắc, rồi 3 km về Tây và 4 km về Nam. Quãng đường và độ dịch chuyển là:", ["14 km; 0 km", "10 km; 0 km", "14 km; 10 km", "0 km; 14 km"], 0, "Tổng quãng đường là 3 + 4 + 3 + 4 = 14 km; hành trình khép kín nên độ dịch chuyển bằng 0 km.", 100]
    ],
    trueFalse: [],
    shortAnswer: []
  }
};
