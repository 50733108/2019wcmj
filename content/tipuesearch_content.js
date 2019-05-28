var tipuesearch = {"pages": [{'title': '期末報告', 'text': '五精一甲\xa0 \xa050733108\xa0 陳振輝 \n \n \n \xa0 \n 期末報告影片說明 \n \n', 'tags': '', 'url': '期末報告.html'}, {'title': 'ROC Flag', 'text': '\n  啟動 Brython  \n \n \n \n  啟動 Brython  \n \n \n \n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'ROC Flag.html'}, {'title': '網路連線設定', 'text': '(1)按下右上方的3點線並進入"設定"(setting) \n \n \n (2)滑到底下按下"進階"(advanced) \n \n (3)點擊倒數第2個"系統"(system)裡的"開啟proxy設定"(open proxy setting) \n \n (4)按下"Lan設定" \n \n (5)"位址"可改變所連的網路 。 \n \xa0 \xa0 \xa0 \xa0連接埠旁的"進階"可設定:不為開頭為下列項目的位址使用proxy伺服器。 \n \n \n Btw\xa0 \n 1. <140.130>開頭的網址沒有加密；<192.168>有加密 閒雜人等無法連上 \n 2. IPV6能力大於 IPV4 \n 3 .140.130.17為學校網路開頭 後面接".數字"來確認連上哪台\xa0 53為最強', 'tags': '', 'url': '網路連線設定.html'}, {'title': '配置可攜程式環境', 'text': '將存在於USB中的"cd2019_cdb_w5"打開(此操作只可在Window10系統打開) \n "start.bat"為打開環境；"stop.bat"為停止運作 \n \n \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '倉儲改版', 'text': '先擁有Github的倉儲 \n \xa0clone 倉儲至近端工作後, 對遠端倉儲改版 \n 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端.', 'tags': '', 'url': '倉儲改版.html'}, {'title': '指令區', 'text': 'git add .\xa0 \xa0將使用者對近端網(動態網)的更動做一個拍快照的動作 \n git commit\xa0 :\xa0 將上述的快照提交至倉儲\xa0\xa0 \n git push\xa0 :\xa0 將使用者對近態網的更改傳到靜端網(遠端網)上並更改\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 (git push時是用config裡的"URL協定"完成) \n git config --edit --system\xa0 :\xa0 編輯近端設定\xa0 輸入:wq (write quit)來離開編輯頁。 我們編輯的目的為去除"要求登入的小視窗"\xa0 因為系統會自動記憶輸入的帳號而且每次都要輸入也麻煩\xa0 所以清除它來防隱私跟去麻煩\xa0 \xa0但是需要下面指令來自動登入而達成各式指令 \n ssh-keygen -t rsa -b 4096 -C "username(學號)" :\xa0 \xa0建立公鑰及私鑰並將公鑰放入github的ssh key\xa0 完成以上動作時完成自動登入動作\xa0 可省略輸入帳號密碼這步驟即可擁有權限來進行指令 Ex. git commit \n git status\xa0 :\xa0 確認系統是否改版成功 \n python wsgi.py : 連上動態網(須連上對應跟目錄才可叫出) \n kungit\xa0 :\xa0 利用樹狀圖來直接確認git push 是否成功或者可直接在那上面push \n c:\xa0 \xa0切換到C槽。\xa0 反之\xa0 "Y:"為切入"Y槽" \n cd\xa0 切換根目錄(資料夾)。可一次性大量切換 Ex.\xa0 \xa0cd tmp\\repo\\ssh\\cmstest \n cd..\xa0 \xa0跳出根目錄\xa0 返回到上個根目錄 \n dir\xa0 查看所在目錄內容 \n mkdir (make directory)\xa0 建立一個資料夾\xa0 可隨意命名 Ex. 取名為\xa0 " ssh" \n cls\xa0 清除之前指示的顯示內容 \n git reset --hard HEAD\xa0 :\xa0 將倉儲還原成上一次版本 \n \n', 'tags': '', 'url': '指令區.html'}, {'title': '倉儲編輯相關', 'text': '萬事起頭為"log in" \n \n \n 近端與遠端上方差異\xa0 包含上面圖 \n 遠: \n \n 近: \n \n \n', 'tags': '', 'url': '倉儲編輯相關.html'}, {'title': '倉儲基本用法簡介', 'text': '點擊此開始編輯頁面 \n \n 嵌入原始碼的地方 \n \n 儲存鈕位置\xa0 兩個都可以 \n \n 插入圖片 \n \n 放連結 \n \n 建立子目錄\xa0 HEAD1是最大的\xa0 HEAD2為1的子目錄\xa0 依序下去 \n 用法為選一段文字為開頭\xa0 則那句下面所有內容會成為為子目錄內容 \n \n \n 範例 : 選好反藍處為子目錄title\xa0 並按HEAD2\xa0 因此其他無反藍處會成為子目錄內容 \n \xa0 \xa0', 'tags': '', 'url': '倉儲基本用法簡介.html'}, {'title': '將youtube影片放入倉儲', 'text': '1.選1個要放入的影片 \n \n 2.點選下方分享並點擊"<>"圖案 \n \n \n 3.複製原始碼並貼上倉儲嵌入原始碼處 \n \n 4.save即可', 'tags': '', 'url': '將youtube影片放入倉儲.html'}, {'title': 'VPN', 'text': '使用VPN將校外電腦的IP連上學校的\xa0 使系統認定校外電腦可使用校內資源\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0例如 : 下載正版且免費的AutoCAD、Office system... \n 1.至 此連結 下載圖片所示程式 \n \n 2.開啟上面程式\xa0 開啟完後在CMD搜尋"Network Connect"並點開程式 \n \n 3. 於"登入頁面"輸入網址 :\xa0 https://sslvpn9.twaren.net/nfu \xa0並執行 \n \n 4.登入 \n \n 5.完成後右下方會出現所示圖案\xa0 此圖表示成功 \n', 'tags': '', 'url': 'VPN.html'}, {'title': '亂數抽選', 'text': '\n \n \n Start \n \n', 'tags': '', 'url': '亂數抽選.html'}, {'title': '資料來源', 'text': '嚴家銘老師的期末示範網:\xa0 http://cpgx.kmol.info/wcm2019/content/index.html \n 上課時所抄的筆記 \n 上課錄影 https://www.youtube.com/channel/UCJ0Ye3mhMApH0yxAcwCXs5g/videos \n VPN的部分: https://nfucc.nfu.edu.tw/zh/download/download-network/ssl-vpn \n', 'tags': '', 'url': '資料來源.html'}, {'title': '期中報告', 'text': '很隨便的期中作業 :\xa0\xa0 https://www.youtube.com/watch?v=XOHeedUke1c', 'tags': '', 'url': '期中報告.html'}]};