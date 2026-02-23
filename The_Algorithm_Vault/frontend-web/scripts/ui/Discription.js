export class Discriptions{

    Pathfinding_Visualizer(){
        return `
                        <h2 style="margin-bottom:20px;">📘 Pathfinding Visualizer - วิธีการใช้งาน</h2>
    <section style="margin-bottom:25px;">
        <h3>🔷 วิธีการเล่น</h3>
        <p>
            ระบบนี้เป็นเครื่องมือสำหรับทดลองและเปรียบเทียบอัลกอริทึมค้นหาเส้นทาง 
            ระหว่างจุดเริ่มต้น (Start) และจุดปลายทาง (End) บน Grid
        </p>
    </section>

    <section style="margin-bottom:25px;">
        <h3>1️⃣ กำหนดตำแหน่ง</h3>
        <ul>
            <li>กดปุ่ม <strong>“กำหนด start , stop”</strong></li>
            <li>คลิกเลือกตำแหน่งเริ่มต้น (สีเขียว)</li>
            <li>คลิกเลือกตำแหน่งปลายทาง (สีแดง)</li>
            <li>คลิกบนช่องใด ๆ เพื่อสร้างกำแพง (Wall)</li>
        </ul>
    </section>

    <section style="margin-bottom:25px;">
        <h3>2️⃣ เลือกอัลกอริทึม</h3>

        <p><strong>Dijkstra Algorithm</strong></p>
        <ul>
            <li>ค้นหาเส้นทางที่สั้นที่สุดโดยไม่มี heuristic</li>
            <li>ขยายโหนดแบบรอบวง (Breadth Expansion)</li>
        </ul>

        <p><strong>A* Search (A-Star)</strong></p>
        <ul>
            <li>ใช้ heuristic ช่วยนำทาง</li>
            <li>มุ่งไปหาเป้าหมายโดยตรง</li>
            <li>สำรวจโหนดน้อยกว่าในกรณีทั่วไป</li>
        </ul>
    </section>

    <section style="margin-bottom:25px;">
        <h3>3️⃣ เริ่มการค้นหา</h3>
        <p>กดปุ่ม <strong>Start</strong></p>
        <p>ระบบจะแสดง Animation ดังนี้:</p>
        <ul>
            <li>🔵 ช่องที่ถูกสำรวจ (Visited Nodes)</li>
            <li>🟡 เส้นทางที่ดีที่สุด (Shortest Path)</li>
        </ul>
    </section>

    <section style="margin-bottom:25px;">
        <h3>4️⃣ ดูผลลัพธ์</h3>
        <p>ที่แถบด้านบนจะแสดง:</p>
        <ul>
            <li>🔍 จำนวนช่องที่ถูกสำรวจ</li>
            <li>🚩 ความยาวเส้นทาง</li>
            <li>📊 เปรียบเทียบประสิทธิภาพระหว่างอัลกอริทึม</li>
        </ul>
    </section>

    <section style="margin-bottom:25px;">
        <h3>5️⃣ ปุ่มควบคุมเพิ่มเติม</h3>
        <ul>
            <li><strong>Reset</strong> → รีเซ็ตตำแหน่ง Start/End</li>
            <li><strong>Stop, Clear</strong> → หยุดและล้างการแสดงผล</li>
            <li><strong>Random Maze</strong> → สร้างกำแพงแบบสุ่ม</li>
            <li><strong>History</strong> → ดูประวัติการทดลองก่อนหน้า</li>
            <li><strong>Dashboard</strong> → วิเคราะห์ประสิทธิภาพย้อนหลัง</li>
        </ul>
    </section>

    <section style="margin-bottom:25px;">
        <h3>🎯 เป้าหมายของการทดลอง</h3>
        <ul>
            <li>เข้าใจหลักการทำงานของ Dijkstra และ A*</li>
            <li>วิเคราะห์จำนวนโหนดที่ถูกขยาย (Node Expansion)</li>
            <li>เปรียบเทียบประสิทธิภาพเชิงพฤติกรรม (Behavioral Difference)</li>
            <li>ศึกษาความแตกต่างระหว่าง Worst-case และ Average-case</li>
        </ul>
    </section>

    <section>
        <h3>⚠️ หมายเหตุสำคัญ</h3>
        <ul>
            <li>ยิ่งมีสิ่งกีดขวางมาก การค้นหายิ่งซับซ้อน</li>
            <li>A* จะทำงานเร็วขึ้นเมื่อ heuristic มีคุณภาพ</li>
            <li>ทั้งสองอัลกอริทึมยังคงรับประกันหาเส้นทางที่สั้นที่สุด (Optimal)</li>
        </ul>
    </section>`;
    }

    TowerOfHanoi(){
        return `<h2 style="margin-bottom:20px;">🏯 Tower of Hanoi: Interactive Lab - วิธีการใช้งาน</h2>

<section style="margin-bottom:25px;">
    <h3>🔷 วิธีการเล่น</h3>
    <p>
        ระบบนี้เป็น Interactive Lab สำหรับทดลองอัลกอริทึม Tower of Hanoi
        โดยสามารถลากจานด้วยตนเอง หรือให้ AI ช่วยแก้ปัญหาแบบ Recursive
        พร้อมแสดง Move Log, Recursive Monitor และวิเคราะห์เชิงทฤษฎีในหน้าถัดไป
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>1️⃣ ตั้งค่าจำนวนจาน</h3>
    <ul>
        <li>กำหนดจำนวน Disk (1 - 7) ที่ช่องตัวเลขด้านบน</li>
        <li>ระบบจะคำนวณ Best Possible Moves = 2ⁿ - 1 อัตโนมัติ</li>
        <li>สามารถกด <strong>Reset Game</strong> เพื่อเริ่มใหม่</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>2️⃣ โหมดการเล่น</h3>

    <p><strong>Manual Mode (ลากจานเอง)</strong></p>
    <ul>
        <li>ลากจานจากเสาหนึ่งไปยังอีกเสาหนึ่ง</li>
        <li>ห้ามวางจานใหญ่ทับจานเล็ก</li>
        <li>ระบบจะบันทึกทุกการเคลื่อนที่ใน Move Log</li>
    </ul>

    <p><strong>AI Solve Mode</strong></p>
    <ul>
        <li>กดปุ่ม <strong>Start Solve</strong></li>
        <li>AI จะใช้ Recursive Algorithm แบบ Optimal</li>
        <li>สามารถกด <strong>Next Step</strong> เพื่อดูทีละขั้นตอน</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>3️⃣ ส่วนแสดงผลบนหน้าจอ</h3>
    <ul>
        <li>📜 <strong>Move Log</strong> → บันทึกลำดับการย้ายทั้งหมด</li>
        <li>📊 <strong>Moves</strong> → จำนวนครั้งที่เคลื่อนที่ปัจจุบัน</li>
        <li>⭐ <strong>Best Possible</strong> → ค่าขั้นต่ำตามสูตร 2ⁿ - 1</li>
        <li>🧠 <strong>Recursive Monitor</strong> → แสดงลำดับการเรียกฟังก์ชันแบบ Stack</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>4️⃣ กติกาหลักของ Tower of Hanoi</h3>
    <ul>
        <li>ย้ายได้ครั้งละ 1 จาน</li>
        <li>ห้ามวางจานใหญ่บนจานเล็ก</li>
        <li>เป้าหมายคือย้ายทั้งหมดจาก Source → Target</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>🎯 เป้าหมายทางการเรียนรู้</h3>
    <ul>
        <li>เข้าใจ Recurrence Relation: T(n) = 2T(n-1) + 1</li>
        <li>พิสูจน์ Closed-form Solution: 2ⁿ - 1</li>
        <li>วิเคราะห์ Time Complexity: Θ(2ⁿ)</li>
        <li>วิเคราะห์ Space Complexity: O(n)</li>
        <li>เข้าใจ Recursion Tree และ State Space Explosion</li>
    </ul>
</section>

<section>
    <h3>⚠️ หมายเหตุสำคัญ</h3>
    <ul>
        <li>ปัญหานี้ไม่มี Best-case หรือ Average-case</li>
        <li>ทุกกรณีต้องใช้จำนวน Move เท่ากัน (Optimal Deterministic Path)</li>
        <li>แม้เวลาโตแบบ Exponential แต่ Memory โตแบบ Linear</li>
        <li>State Space ทั้งหมดอาจสูงถึง 3ⁿ สถานะ</li>
    </ul>
</section>`;

    }

    Pattern_Studio(){
        return `<h2 style="margin-bottom:20px;">✨ Visual Pattern Studio: Nested Loop Art - วิธีการใช้งาน</h2>

<section style="margin-bottom:25px;">
    <h3>🔷 วิธีการเล่น</h3>
    <p>
        ระบบนี้เป็น Interactive Lab สำหรับทดลองการสร้างรูปทรงด้วย Nested Loop
        โดยใช้ดัชนีแถว (i) และคอลัมน์ (j) เพื่อควบคุมการวาดลวดลายบน Grid
        พร้อมแสดงค่าตัวแปรแบบ Real-time และอธิบายตรรกะเงื่อนไขของแต่ละ Pattern
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>1️⃣ เลือกรูปแบบและขนาด</h3>
    <ul>
        <li>เลือก Pattern ที่ต้องการจากเมนู Dropdown</li>
        <li>กำหนดขนาด Grid (3 - 9 และเพิ่มทีละ 2)</li>
        <li>ค่าที่เลือกจะกำหนดขนาด n × n ของพื้นที่วาด</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>2️⃣ โหมดการทำงาน</h3>

    <p><strong>Start Draw</strong></p>
    <ul>
        <li>วาด Pattern ทันทีแบบครบทุก cell</li>
        <li>ประมวลผลครบ n² ช่องในครั้งเดียว</li>
    </ul>

    <p><strong>Start Solve (Step Mode)</strong></p>
    <ul>
        <li>แสดงขั้นตอนการทำงานของ Nested Loop ทีละช่อง</li>
        <li>สามารถกด <strong>Next Step</strong> เพื่อดูการเปลี่ยนค่า i และ j</li>
        <li>เลือก Delay เพื่อควบคุมความเร็วของ Animation</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>3️⃣ ส่วนแสดงผลบนหน้าจอ</h3>
    <ul>
        <li>🟦 <strong>Grid View</strong> → พื้นที่แสดงผล Pattern</li>
        <li>🔢 <strong>Row Index (i)</strong> → ค่าลูปนอก (ควบคุมแถว)</li>
        <li>🔢 <strong>Col Index (j)</strong> → ค่าลูปใน (ควบคุมคอลัมน์)</li>
        <li>🧠 <strong>Condition Logic</strong> → แสดงนิพจน์ที่กำลังถูกประเมิน</li>
        <li>📢 <strong>Status Box</strong> → สถานะการทำงานของระบบ</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>4️⃣ หลักการทำงานของ Nested Loop</h3>
    <ul>
        <li>Outer Loop (i) ทำงาน n ครั้ง</li>
        <li>Inner Loop (j) ทำงาน n ครั้งต่อ 1 รอบของ i</li>
        <li>รวมทั้งหมด = n × n = n² ครั้ง</li>
        <li>ทุก cell ถูกประเมินด้วยฟังก์ชันบูลีน G(i,j)</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>🎯 เป้าหมายทางการเรียนรู้</h3>
    <ul>
        <li>เข้าใจโครงสร้าง Nested Loop แบบ 2 มิติ</li>
        <li>วิเคราะห์ตรรกะเชิงคณิตศาสตร์บน Grid</li>
        <li>เข้าใจ Manhattan Distance และ Midpoint Logic</li>
        <li>พิสูจน์ความซับซ้อนเชิงเวลา O(n²)</li>
        <li>มอง Animation เป็น State Machine (Sₖ)</li>
    </ul>
</section>

<section>
    <h3>⚠️ หมายเหตุสำคัญ</h3>
    <ul>
        <li>ทุก Pattern ใช้การประเมินเงื่อนไขแบบ Boolean</li>
        <li>Algorithm เป็น Exhaustive Traversal</li>
        <li>Time Complexity = O(n²)</li>
        <li>Memory Complexity = O(n²) หากเก็บสถานะทุกช่อง</li>
        <li>หาก Render แบบ Streaming สามารถลด Memory ได้</li>
    </ul>
</section>`;
    }

    LinkedListAndStack() {
    return `
<h2 style="margin-bottom:20px;">🔗 Linked List & Stack Lab : Dynamic vs Static Memory Model</h2>

<section style="margin-bottom:25px;">
    <h3>🔷 ภาพรวมของระบบ</h3>
    <p>
        หน้านี้เป็น Interactive Data Structure Lab
        สำหรับวิเคราะห์และทดลองโครงสร้างข้อมูลสองประเภทหลัก ได้แก่
        <strong>Linked List (Dynamic Allocation)</strong> และ
        <strong>Stack (Static / Contiguous Allocation)</strong>
        ผ่านการจำลองเชิงภาพ (Visual Simulation) และการวิเคราะห์เชิงระบบ
    </p>
    <p>
        ระบบไม่ได้เพียงแสดง Animation
        แต่จำลอง State-driven Algorithm Execution
        เพื่อให้เข้าใจทั้ง Memory Model และ Execution Behavior อย่างลึกซึ้ง
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>1️⃣ Linked List Lab</h3>

    <p><strong>แนวคิดหลัก</strong></p>
    <ul>
        <li>Node-based Dynamic Structure</li>
        <li>Memory Allocation บน Heap ทีละ Node</li>
        <li>เชื่อมโยงผ่าน Pointer (next reference)</li>
    </ul>

    <p><strong>Operation ที่รองรับ</strong></p>
    <ul>
        <li>Add First → O(1)</li>
        <li>Delete Node → O(n)</li>
        <li>Traversal → O(n)</li>
        <li>Reset Structure</li>
    </ul>

    <p><strong>แนวคิดเชิงหน่วยความจำ</strong></p>
    <pre>
Node = { data, next }
Space(n) = n × (Data + Pointer)
Memory Complexity = O(n)
    </pre>

    <p>
        บนระบบ 64-bit Pointer มีขนาด 8 bytes
        ทำให้ Linked List มี Pointer Overhead สูงกว่า Array
        และมี Cache Miss ได้ง่ายจาก Pointer Chasing
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>2️⃣ Stack Lab (LIFO Model)</h3>

    <p><strong>หลักการทำงาน</strong></p>
    <ul>
        <li>Push → เพิ่มข้อมูลบน Top</li>
        <li>Pop → ลบข้อมูลบน Top</li>
        <li>Next Step → ดูลำดับขั้นตอนการทำงาน</li>
        <li>Reset → ล้างโครงสร้าง</li>
    </ul>

    <p><strong>Time Complexity</strong></p>
    <pre>
Push : O(1)
Pop  : O(1)
Peek : O(1)
    </pre>

    <p><strong>Memory Model</strong></p>
    <pre>
Space(n) = O(N_max)
    </pre>

    <p>
        Stack แบบ Static Array จอง Memory เต็มตามขนาดสูงสุด
        แม้ใช้งานไม่เต็ม แต่มีข้อดีด้าน Cache Locality สูงมาก
        เนื่องจากข้อมูลเรียงต่อเนื่องในหน่วยความจำ
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>3️⃣ Comparative Structural Insight</h3>

    <pre>
LinkedList : Dynamic Heap Allocation
Stack      : Contiguous Memory Allocation
    </pre>

    <ul>
        <li>Linked List → ยืดหยุ่น แต่ Pointer Overhead สูง</li>
        <li>Stack → เร็วกว่าในระบบจริงเพราะ Cache Efficiency</li>
        <li>Big-O อาจเท่ากัน แต่ Constant Factor ต่างกันมาก</li>
    </ul>

    <p>
        Performance จริงไม่ได้ขึ้นอยู่กับ Big-O เพียงอย่างเดียว
        แต่ขึ้นอยู่กับ Cache Behavior, CPU Pipeline, และ Memory Access Pattern
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>4️⃣ State-Driven Simulation Model</h3>
    <ul>
        <li>ทุก Operation ถูกจำลองเป็น State Transition</li>
        <li>UI แสดงขั้นตอนผ่าน Animation</li>
        <li>Algorithm Execution ถูกควบคุมด้วย Event-driven Architecture</li>
        <li>รองรับ Step-by-Step Mode เพื่อการเรียนรู้เชิงลึก</li>
    </ul>
</section>

<section>
    <h3>🎯 เป้าหมายทางการเรียนรู้</h3>
    <ul>
        <li>เข้าใจความแตกต่างระหว่าง Dynamic และ Static Memory Model</li>
        <li>วิเคราะห์ Time Complexity เชิงทฤษฎีและเชิงระบบ</li>
        <li>เข้าใจ Cache Locality และ Pointer Chasing Cost</li>
        <li>สามารถออกแบบ Data Structure ตามบริบทของระบบจริง</li>
        <li>เข้าใจ Trade-off ระหว่าง Flexibility และ Performance</li>
    </ul>
</section>

<section style="margin-top:20px;">
    <h3>⚠️ หมายเหตุเชิงระบบ</h3>
    <ul>
        <li>Linked List เหมาะกับโครงสร้างที่ขนาดไม่แน่นอน</li>
        <li>Stack แบบ Array เหมาะกับระบบที่ต้องการประสิทธิภาพสูง</li>
        <li>ในระบบ Production ส่วนใหญ่ Array-based Structure มักเร็วกว่า</li>
        <li>การเลือกใช้ขึ้นกับ Workload Pattern และ Memory Constraint</li>
    </ul>
</section>
`;
}

InfixToPostfix() {
    return `
<h2 style="margin-bottom:20px;">🧮 Math Engine Lab : Infix → Postfix & Stack Machine</h2>

<section style="margin-bottom:25px;">
    <h3>🔷 ภาพรวมของระบบ</h3>
    <p>
        Math Engine Lab เป็น Interactive Stack-based Execution System
        สำหรับแปลงนิพจน์คณิตศาสตร์แบบ Infix ไปเป็น Postfix
        และทำการประเมินผลแบบ Step-by-Step
    </p>
    <p>
        ระบบนี้จำลอง Shunting Yard Algorithm
        พร้อม Stack Visualization และ Execution Trace
        ทำให้สามารถเข้าใจทั้ง Operator Precedence,
        Stack Behavior และ Expression Evaluation Architecture
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>1️⃣ โหมดการทำงาน</h3>

    <p><strong>Convert Only</strong></p>
    <ul>
        <li>แปลง Infix → Postfix เท่านั้น</li>
        <li>แสดง Operator Stack และ Output Queue</li>
        <li>Time Complexity = O(n)</li>
    </ul>

    <p><strong>Full Process</strong></p>
    <ul>
        <li>แปลง Infix → Postfix</li>
        <li>ประเมินค่า Postfix</li>
        <li>แสดง Operand Stack และผลลัพธ์สุดท้าย</li>
    </ul>

    <p><strong>Next Step</strong></p>
    <ul>
        <li>แสดง Execution ทีละ Token</li>
        <li>จำลอง State Transition ของ Stack Machine</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>2️⃣ โครงสร้างเชิงทฤษฎี</h3>

    <pre>
Operators:
+  -  precedence = 1
*  /  %  precedence = 2
(  precedence = 0
    </pre>

    <p>
        กำหนดฟังก์ชัน precedence(op)
        เพื่อใช้ควบคุมลำดับการ pop/push บน Operator Stack
    </p>

    <p>
        ทุก token ถูก push ไม่เกิน 1 ครั้ง
        และ pop ไม่เกิน 1 ครั้ง
    </p>

    <pre>
Time Complexity = O(n)
Space Complexity = O(n)
    </pre>
</section>

<section style="margin-bottom:25px;">
    <h3>3️⃣ Postfix Evaluation Model</h3>

    <pre>
For each token t in postfix:
    if operand → push
    if operator:
        b = pop()
        a = pop()
        push(a op b)
    </pre>

    <p>
        โมเดลนี้เทียบเท่า Reverse Polish Notation Virtual Machine
        และเป็น Deterministic Stack Machine
    </p>

    <ul>
        <li>No Backtracking</li>
        <li>Linear Execution</li>
        <li>Predictable Memory Usage</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>4️⃣ State-Driven Simulation Architecture</h3>

    <pre>
State_t = {
    infixIndex,
    postfixQueue,
    operatorStack,
    operandStack,
    message
}
    </pre>

    <p>
        ทุกขั้นตอนถูกเก็บเป็น State Snapshot
        เพื่อรองรับ Animation และ Step-by-Step Debug Mode
    </p>

    <p>
        ระบบนี้เทียบเท่า:
        Execution Trace Viewer
        หรือ Lightweight Expression Interpreter
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>5️⃣ Correctness Insight</h3>

    <ul>
        <li>Operator ที่มี precedence สูงกว่าจะถูก evaluate ก่อน</li>
        <li>Parentheses ควบคุม scope การประมวลผล</li>
        <li>Stack ทำหน้าที่รักษา Invariant ของลำดับการประเมินค่า</li>
    </ul>

    <p>
        Proof Sketch:
    </p>

    <pre>
Base Case:
Single operand → Correct

Inductive Step:
k tokens correct
k+1 preserves precedence invariant
    </pre>
</section>

<section style="margin-bottom:25px;">
    <h3>6️⃣ System-Level Insight</h3>
    <ul>
        <li>Algorithm เป็น Linear Stack Machine</li>
        <li>ใช้ Memory แบบ Contiguous Array-backed Stack</li>
        <li>ไม่มี Recursive Call → ไม่มี Call Stack Growth</li>
        <li>สามารถขยายเป็น Compiler Frontend ได้</li>
    </ul>

    <p>
        โมเดลนี้เป็นพื้นฐานของ:
        Expression Parser,
        Bytecode Generator,
        Mathematical Interpreter,
        หรือ Virtual Machine Engine
    </p>
</section>

<section>
    <h3>🎯 เป้าหมายทางการเรียนรู้</h3>
    <ul>
        <li>เข้าใจ Shunting Yard Algorithm</li>
        <li>เข้าใจ Stack Machine Architecture</li>
        <li>วิเคราะห์ Time & Space Complexity</li>
        <li>เข้าใจ Operator Precedence และ Associativity</li>
        <li>สร้างโมเดล Execution Trace ด้วยตนเองได้</li>
    </ul>
</section>

<section style="margin-top:20px;">
    <h3>⚠️ หมายเหตุเชิงระบบ</h3>
    <ul>
        <li>Expression ที่ไม่ถูกต้องจะทำให้ Stack ไม่สมดุล</li>
        <li>Operand Stack ต้องเหลือค่าเดียวหลัง evaluation</li>
        <li>Operator Associativity อาจขยายเพิ่มเติม (เช่น ^)</li>
        <li>สามารถต่อยอดเป็น AST-based Parser ได้</li>
    </ul>
</section>
`;
}

SecurityUtilityLab() {
    return `
<h2 style="margin-bottom:20px;">🛠️ Security & Utility Lab : Caesar Cipher & Anagram Engine</h2>

<section style="margin-bottom:25px;">
    <h3>🔷 ภาพรวมของระบบ</h3>
    <p>
        ระบบนี้เป็น Cryptographic Utility Engine ขนาดเล็ก
        ที่รวมเครื่องมือ 2 ส่วน:
        Caesar Cipher (Encryption / Decryption)
        และ Anagram Checker
    </p>
    <p>
        แม้จะเป็นเครื่องมือพื้นฐาน
        แต่สามารถวิเคราะห์ได้ทั้งในมุมมอง
        Modular Arithmetic, Group Theory,
        String Processing Algorithm
        และ Complexity Analysis
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>1️⃣ Caesar Cipher : โมเดลเชิงคณิตศาสตร์</h3>

    <pre>
E(x) = (x + k) mod 26
D(x) = (x - k) mod 26
    </pre>

    <ul>
        <li>x = index ของตัวอักษร (0–25)</li>
        <li>k = shift key</li>
        <li>ระบบทำงานบน cyclic group Z₍26₎</li>
    </ul>

    <p>
        การเข้ารหัสคือ translation operation
        บน additive cyclic group
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>2️⃣ Complexity Analysis (Caesar)</h3>

    <pre>
Let n = ความยาวข้อความ

Time  = O(n)
Space = O(n)
    </pre>

    <ul>
        <li>ประมวลผลตัวอักษรทุกตัว</li>
        <li>ไม่มี nested loop</li>
        <li>Deterministic Linear Transformation</li>
    </ul>
</section>

<section style="margin-bottom:25px;">
    <h3>3️⃣ Security Insight</h3>

    <pre>
Key Space = 26
Brute Force ≈ O(26n) ≈ O(n)
    </pre>

    <ul>
        <li>Key space เล็กมาก</li>
        <li>Monoalphabetic substitution</li>
        <li>Frequency profile ไม่เปลี่ยน</li>
        <li>ถูกโจมตีด้วย Statistical Analysis ได้ง่าย</li>
    </ul>

    <p>
        ดังนั้น Caesar Cipher
        ไม่ปลอดภัยในมาตรฐาน Cryptography สมัยใหม่
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>4️⃣ Anagram Checker : Permutation Test</h3>

    <pre>
Anagram ⇔ sort(s₁) = sort(s₂)
    </pre>

    <p>
        หรือในเชิงคณิตศาสตร์:
    </p>

    <pre>
Multiset(s₁) = Multiset(s₂)
    </pre>

    <p>
        หมายถึงทั้งสอง string
        มี frequency distribution เหมือนกันทุกตัวอักษร
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>5️⃣ Complexity Analysis (Anagram)</h3>

    <pre>
Split  : O(n)
Sort   : O(n log n)
Compare: O(n)

Total  : O(n log n)
    </pre>

    <p>
        หากใช้ frequency array (ขนาด 26):
    </p>

    <pre>
Time  = O(n)
Space = O(1)
    </pre>

    <p>
        ซึ่งเป็น Optimization ที่มีประสิทธิภาพกว่า
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>6️⃣ State Logging Model</h3>

    <pre>
H = {(type, input, output, timestamp)}
    </pre>

    <p>
        History Log ทำหน้าที่เป็น Immutable Execution Record
        เพื่อรองรับการวิเคราะห์ย้อนหลัง
    </p>

    <pre>
Memory = O(m)
    </pre>

    โดย m = จำนวนรายการที่เก็บ
</section>

<section style="margin-bottom:25px;">
    <h3>7️⃣ System-Level Architecture</h3>

    <ul>
        <li>Functional Transformation Engine</li>
        <li>Stateless Cipher Mapping</li>
        <li>Pure Function Based Evaluation</li>
        <li>Modular Utility Framework</li>
    </ul>

    <p>
        สามารถต่อยอดเป็น:
        Multi-Cipher Framework,
        Cryptanalysis Demonstrator,
        หรือ Educational Crypto Lab
    </p>
</section>

<section style="margin-bottom:25px;">
    <h3>8️⃣ Algebraic Property</h3>

    <pre>
E_k(E_m(x)) = E_{k+m}(x)
    </pre>

    <p>
        Caesar Cipher มี property แบบ additive homomorphism
        ภายใต้ group (Z₍26₎, +)
    </p>
</section>

<section>
    <h3>🎯 เป้าหมายทางการเรียนรู้</h3>
    <ul>
        <li>เข้าใจ Modular Arithmetic</li>
        <li>เข้าใจ Substitution Cipher</li>
        <li>วิเคราะห์ Time & Space Complexity</li>
        <li>เข้าใจ Permutation Test</li>
        <li>ออกแบบ Utility Engine แบบ Modular</li>
    </ul>
</section>

<section style="margin-top:20px;">
    <h3>⚠️ หมายเหตุสำคัญ</h3>
    <ul>
        <li>Caesar ไม่ปลอดภัยสำหรับข้อมูลจริง</li>
        <li>ควรใช้ AES หรือ RSA ในงานจริง</li>
        <li>ระบบนี้ใช้เพื่อการศึกษาเท่านั้น</li>
        <li>สามารถขยายไปสู่ Vigenère หรือ AES Simulation ได้</li>
    </ul>
</section>
`;
}

}