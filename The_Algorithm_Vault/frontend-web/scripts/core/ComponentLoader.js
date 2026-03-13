export class ComponentLoader {

    async load(url, targetId) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Load failed");

            const html = await res.text();
            const target = document.getElementById(targetId);
            if (target) target.innerHTML = html;
        } catch (err) {
            console.error("Component load error:", err);
        }
    }
}
