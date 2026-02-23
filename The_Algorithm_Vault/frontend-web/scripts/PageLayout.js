import { ComponentLoader } from "./core/ComponentLoader.js";
import { UIManager } from "./ui/UIManager.js";
import {Discriptions} from "./ui/Discription.js";

class Application {

    constructor() {
        this.loader = new ComponentLoader();
        this.Dis = new Discriptions();
        this.ui = new UIManager(
            this.Dis
        );
    }
    
    async init() {
        console.log("System Initializing...");

        // 1️⃣ โหลด Navbar เสมอ
        await this.loader.load("/frontend-web/styles/navbar.html", "content-placeholder");

        const tasks = [];

        // 2️⃣ ตรวจสอบ container เหมือนไฟล์เดิม
        if (document.getElementById("vault-index")) {
            tasks.push(
                this.loader.load("/frontend-web/styles/VAULT_INDEX.html", "vault-index")
            );
        }

        if (document.getElementById("paginative")) {
            tasks.push(
                this.loader.load("/frontend-web/styles/dot.html", "paginative")
            );
        }

        if (document.getElementById("menuactive")) {
            tasks.push(
                this.loader.load("/frontend-web/styles/initSaveAndDownloadIconsMenu.html", "menuactive")
            );
        }

        await Promise.all(tasks);

        // 3️⃣ หลังโหลดครบ → เรียก UI ทั้งหมด
        this.ui.initializeEverything();
    }
}

const app = new Application();
app.init();
window.switchArticle = (id) => app.ui.switchArticle(id);
window.navigatePage = (dir) => app.ui.navigatePage(dir);
window.dotscroll = () => app.ui.dotscroll();
window.nav_bar = () => app.ui.nav_bar();
