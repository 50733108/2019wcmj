var tipuesearch = {"pages": [{'title': '首頁', 'text': '這裡是 虎科大 五精一甲 50733108 陳振輝的倉儲 \n 因應課堂需求而開了這個倉儲，請多指教 \n 完成日期為2019 6/9 \n \n', 'tags': '', 'url': '首頁.html'}, {'title': '期末報告', 'text': '', 'tags': '', 'url': '期末報告.html'}, {'title': '期末報告相關資訊', 'text': '\n 達成學期教育目標之評量方式與標準: \n 評分比例: \n \xa0 \xa0學員出席 (20%) \n \xa0 \xa0電腦組裝與操作系統安裝 (10%) \n \xa0 \xa0網路連線配置與設定\xa0 (10%) \n \xa0 \xa0Github 倉儲與 CMSimfly 配置 (30%) \n \xa0 \xa0CMSimfly 操作 (20%) \n \xa0 \xa0CMSimfly 開發 (10%) \n 評分方式: \n \xa0 \xa0\xa0 WCM 每週自評與互評表單(只接受 gm.nfu.edu.tw 使用者)  \n \xa0 \xa0 學員自我評量 \xa0(30%) \n \xa0 \xa0 分組自我評量 (30%) \n \xa0 \xa0 倉儲歷程查驗 (40%) \n \xa0 \n 期末報告影片說明 \n', 'tags': '', 'url': '期末報告相關資訊.html'}, {'title': 'ROC Flag', 'text': '\n  啟動 Brython  \n \n \n \n  啟動 Brython  \n \n \n \n  啟動 Brython  \n \n \n \n \n', 'tags': '', 'url': 'ROC Flag.html'}, {'title': '網路連線設定', 'text': '可在cmd輸入nslookup查詢可用proxy位址或者輸入ipconfig得到IP相關資訊 \n Chrome裡查看網路 \n (1)進入"設定"(setting) \n (2)滑到底下按下"進階"(advanced) \n (3)點擊倒數第2個"系統"(system)裡的"開啟proxy設定"(open proxy setting) \n \n (4)按下"Lan設定" \n \n (5)"位址"可改變所連的網路 。 \n \xa0 \xa0 \xa0 \xa0連接埠旁的"進階"可設定:不為開頭為下列項目的位址使用proxy伺服器。 \n \n \n Btw\xa0 \n 1. <140.130>開頭的網址沒有加密；<192.168>有加密 閒雜人等無法連上 \n 2. IPV6能力大於 IPV4 \n 3 .140.130.17為學校網路開頭 後面接".數字"來確認連上哪台\xa0 53為最強', 'tags': '', 'url': '網路連線設定.html'}, {'title': '配置可攜程式環境', 'text': '將存在於USB中的"cd2019_cdb_w5"打開(此操作只可在Window10系統打開) \n "start.bat"為打開環境；"stop.bat"為停止運作 \n 格式可分為 \n FAT32 : 兼容性高但安全度不夠，下載檔案不可超出4GB，名字字數不可超出225，不建議使用此格式 \n FAT64 : 兼容性好，檔案下載為256GB以下 \n NTFS : 好管理、適合放數據資料、屬於微軟專利其他人需藉由第3方協助才可用 \n 使用Virtual Box 時需下載Ubuntu，所以USB需格式成NTFS才好用 \n \n \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '倉儲改版', 'text': '先擁有Github的倉儲 \n \xa0clone 倉儲至近端工作後, 對遠端倉儲改版 \n 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端.', 'tags': '', 'url': '倉儲改版.html'}, {'title': '指令區', 'text': '此區的指令需輸入在開啟後cd2019_cdb_w5的黑面板裡才可發揮功效 \n git add .\xa0 \xa0將使用者對近端網(動態網)的更動做一個拍快照的動作 \n git commit\xa0 :\xa0 將上述的快照提交至倉儲\xa0\xa0 \n git push\xa0 :\xa0 將使用者對近態網的更改傳到靜端網(遠端網)上並更改 (git push時是用config裡的"URL協定"完成) \n git config --edit --system\xa0 :\xa0 編輯近端設定\xa0 輸入:wq (write quit)來離開編輯頁。 我們編輯的目的為去除"要求登入的小視窗"\xa0 因為系統會自動記憶輸入的帳號而且每次都要輸入也麻煩\xa0 所以清除它來防隱私跟去麻煩\xa0 \xa0但是需要下面指令來自動登入而達成各式指令 \n ssh-keygen -t rsa -b 4096 -C "username(學號)" :\xa0 \xa0建立公鑰及私鑰並將公鑰放入github的ssh key\xa0 完成以上動作時完成自動登入動作\xa0 可省略輸入帳號密碼這步驟即可擁有權限來進行指令 Ex. git commit \n git status\xa0 :\xa0 確認系統是否改版成功 \n python wsgi.py : 連上動態網(須連上對應跟目錄才可叫出) \n kungit\xa0 :\xa0 利用樹狀圖來直接確認git push 是否成功或者可直接在那上面push \n c:\xa0 \xa0切換到C槽。\xa0 反之\xa0 "Y:"為切入"Y槽" \n cd\xa0 切換根目錄(資料夾)。可一次性大量切換 Ex.\xa0 \xa0cd tmp\\repo\\ssh\\cmstest \n cd..\xa0 \xa0跳出根目錄\xa0 返回到上個根目錄 \n dir\xa0 查看所在目錄內容 \n mkdir (make directory)\xa0 建立一個資料夾\xa0 可隨意命名 Ex. 取名為\xa0 " ssh" \n cls\xa0 清除之前指示的顯示內容 \n git reset --hard HEAD\xa0 :\xa0 將倉儲還原成上一次推送版本 \n \n', 'tags': '', 'url': '指令區.html'}, {'title': '倉儲編輯相關', 'text': '萬事起頭為"log in" \n \n \n 近端與遠端上方差異\xa0 包含上面圖 \n 遠: \n \n 近: \n \n \n', 'tags': '', 'url': '倉儲編輯相關.html'}, {'title': '倉儲基本用法簡介', 'text': '點擊此開始編輯頁面 \n \n 嵌入原始碼的地方 \n \n 儲存鈕位置\xa0 兩個都可以 \n \n 插入圖片 \n \n 放連結 \n \n \n 建立子目錄\xa0 Heading1是最大的\xa0 Heading2為1的子目錄\xa0 依序下去 \n \n \n \n \n 使用法如下 \n (1)<h1>標題</h1>\xa0 即可成立一個名為標題的子目錄 \n (2)選一段文字為標題\xa0 則那句下面所有內容會成為為子目錄內容 \n 範例 : \n 選好反藍處為子目錄title\xa0 並按HEAD2\xa0 因此其他無反藍處會成為子目錄內容 \n \xa0 \xa0', 'tags': '', 'url': '倉儲基本用法簡介.html'}, {'title': '將youtube影片放入倉儲', 'text': '1.選1個要放入的影片 \n \n 2.點選下方分享並點擊"<>"圖案 \n \n \n 3.複製原始碼並貼上倉儲嵌入原始碼處 \n \n 4.save即可', 'tags': '', 'url': '將youtube影片放入倉儲.html'}, {'title': 'Virtual Box', 'text': '1.創一個Virtual Box 按照以下圖片去依序設定 \n \n \n 2.先按圖進行網路設定後開啟虛擬主機 \n \n \n 3.Download Ubuntu，要檢查USB是否格式成NTFS， 因為... \n Enter this website \n \n \n Download this one \n \n 4.開啟虛擬主機後按照下圖選檔案設定 \n \n 5.完成一連串的設定\xa0 因無法螢幕截圖所以以文字敘述 \n (1)至詢問網路前一直按enter即可 \n (2)輸入現在練線網路 格式為\xa0  http://網路IP \n (3)到第7個之前只需按enter\xa0 第6個按continue \n (4)第7個輸入帳密 \n (5)按space打叉之後按done再按done \n (6)Reboot按下後會重新啟動\xa0 即可完成 \n 6.開機完成後需要登入 登入完成後畫面須為\xa0 "帳號名$" 才可輸入指令 \n ifconfig : 查看現在主機位址，每人不同 \n \xa0sudo apt install nginx\xa0 : 安裝 nginx WWW 伺服器 \n 7.Download FileZilla\xa0 \n \n \n 完成後開啟檔案 \n \n 8.完成設定 \n \n 主機部分為ifconfig所得出的結果 設定完按連線 \n \n 成功畫面 \n \n 輸入  http://ifconfig的答案 \xa0 須出現此畫面 \n \n \n', 'tags': '', 'url': 'Virtual Box.html'}, {'title': 'VPN', 'text': '使用VPN將校外電腦的IP連上學校的\xa0 使系統認定校外電腦可使用校內資源\xa0 例如 : 下載正版且免費的AutoCAD、Office system... \n 1.至 此連結 下載圖片所示程式 \n \n 2.開啟上面程式\xa0 開啟完後在CMD搜尋"Network Connect"並點開程式 \n \n 3. 於"登入頁面"輸入網址 :\xa0 https://sslvpn9.twaren.net/nfu \xa0並執行 \n \n 4.登入 \n \n 5.完成後右下方會出現所示圖案\xa0 此圖表示成功 \n', 'tags': '', 'url': 'VPN.html'}, {'title': '亂數抽選', 'text': '\n \n Start \n \n \n \n 原始碼 \n <div class="line number1 index0 alt2"><code class="html plain"></code></div>\n<p><button onclick="myFunction()">Start</button></p>\n<p></p>\n<p id="demo"></p>\n<script>// <![CDATA[\n// <![CDAIA[\nfunction myFunction(){\n document.getElementById("demo").innerHTML = Math.floor(Math.random()*50+1);\n //document.getElementById("demo").innerHTML ="Start";\n alert("Here You Are");\n}\n// ]]></script> \n', 'tags': '', 'url': '亂數抽選.html'}, {'title': '資料來源', 'text': '嚴家銘老師的期末示範網 \n 所有上課錄影的youtube頻道 \n VPN的部分 \n 上課時所抄的筆記 \n 同學、朋友的幫助', 'tags': '', 'url': '資料來源.html'}, {'title': '筆記雜談', 'text': '此區為上課抄寫的部分筆記 有跟倉儲內容重複及英文單字翻譯已盡量刪除 \n 2019\xa0 2/19至6/4的紀錄', 'tags': '', 'url': '筆記雜談.html'}, {'title': '2月', 'text': '2/19 \n P-TECH = Pathways in Technology Early College High school\xa0 U.S.A.創辦\xa0 原因為(1)企業需要專業人員但高中以上人員無專業(2)上大學很貴 \n 上課必需品 : USB 耳機 筆記本 \n 網路連線設定 \n https(Hypertext Transfer Protocol Secure 超文件傳輸) \n Tcp IP : 美國軍方要求下產物\xa0 以廣播式使不同系統合一\xa0\xa0 \n 2/27 \n 提示 命令字元(cmd) : 輸入 nslookup 查詢網路位址； server換伺服 ctrl+c跳出指令 \n \n \n \xa0', 'tags': '', 'url': '2月.html'}, {'title': '3月', 'text': '3/5 \n End life cycle 即使有發現bug也不更新及提供資源(微軟公司面向) ex.明年的window10 \n 網路協定必有提供資料人及接受者 \n 網路連線設定 \n cmd指令 : ipconfigd空格/all查看現正使用中的網路IP\xa0 \xa0tracert空格+一個網址\xa0 追蹤何點連上 \n Hub=turning集線器 但無功能只是連結而已\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n swith集線器: 可保障每條寬頻 \n 3/12 \n 新增git近端(可參考 倉儲改版 的說明及 指令區 \n 3/19 \n 版本控制是一種紀錄一個或若干文件內容變化以便將來查閱特定版本修訂情況的系統 \n 建立公鑰私鑰(可參考 指令區 \n 3/26 \n WWW全球資訊網(World Wide Web)使用HTML超文件、2D影像、瀏覽器 \n 1994年Stephen Jobs建立NEST 之後有人買走拿去建立了3W系統 \n github不支援ipv6 \n 開啟ShareX按Ctrl+printscreen螢幕截圖\xa0 \n 使用某網路IP完盜版遊戲時其網路IP會被攻擊而不能使用\xa0 系上已有網路因此而無法使用 \n 開啟動態網(參考 指令區 \n', 'tags': '', 'url': '3月.html'}, {'title': '4月', 'text': '4/2 \n 倉儲編輯 \n 4/9 \n 張忠謀(Morris Chang台積電董事): This is your world \n Python模組是使用Flask、bs4、lxml來建立倉儲 \n 4/16 \n 微軟用75億買下GitHub \n 4/23 \n 數位化協同設計 : 利用網路快速運算及連結能力完成全球數位網 \n Virtual Box - 虛擬主機 \n Bridged Adapter(橋接)、NAT只是連上網路、-Host-only內部連線外部舞法連線 \n sudo halt 虛擬主機關機 \n -rw(本人可讀及寫)-r--r--(閒雜人等只可讀) \n 虛擬主機設定 \n 4/30 \n 全為單字解釋\xa0 略過', 'tags': '', 'url': '4月.html'}, {'title': '5月', 'text': '5/7 \n TeX的發明者-Donald Knuth\xa0 網路界活人中第1把交椅 \n 使用Fossil版本時 指令與GitHub版本差不多\xa0 只要把git換成fossil即可 \n 5/14 \n git push 時是用config裡的Url協定完成 \n 5/21 \n session伺服器端的認證資料 \n cookie資料動作存到客戶端\xa0 可以統整 \n 超文件內的特殊符號打法-\xa0 < :\xa0 \xa0&lt；\xa0 \xa0 \xa0> :\xa0 &gt； \n 5/28 \n Virtual Box \n \n', 'tags': '', 'url': '5月.html'}, {'title': '6月', 'text': '6/4 \n 140.130.17.3 為目前系上最強網路\xa0 帳號及密碼為kmolab \n python->interpreter-fast prototyping tool \n c/c++->compiled language(compiler編輯器)-fast execuation \n cython結合2個程式 \n Javascript->browser(GPU)<->node.js(server+Client) \n Javascript太大時用Typescript來補 \n Intel缺乏GPU因此而輸了台積電', 'tags': '', 'url': '6月.html'}, {'title': '期中報告', 'text': '期中作業影片 :\xa0\xa0 https://www.youtube.com/watch?v=XOHeedUke1c', 'tags': '', 'url': '期中報告.html'}]};