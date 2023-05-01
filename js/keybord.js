export default `
<div class="wrapper">
<h1>Virtual keyboard</h1>
<textarea name="textares_keyboard" id="textares_keyboard" cols="30" rows="10"></textarea>
<main>
    <section class="keyboard">
        <div class="row">
            <div class="key" data-code="Backquote"><span>esc</span></div>
            <div class="key" data-code="Digit1"><span>1</span></div>
            <div class="key" data-code="Digit2"><span>2</span></div>
            <div class="key" data-code="Digit3"><span>3</span></div>
            <div class="key" data-code="Digit4"><span>4</span></div>
            <div class="key" data-code="Digit5"><span>5</span></div>
            <div class="key" data-code="Digit6"><span>6</span></div>
            <div class="key" data-code="Digit7"><span>7</span></div>
            <div class="key" data-code="Digit8"><span>8</span></div>
            <div class="key" data-code="Digit9"><span>9</span></div>
            <div class="key" data-code="Digit0"><span>0</span></div>
            <div class="key" data-code="Minus"><span>-</span></div>
            <div class="key" data-code="Equal"><span>=</span></div>
            <div class="key delet" data-code="Backspace"><span>delet</span></div>
        </div>
        <div class="row">
            <div class="key tab" data-code="Tab"><span>tab</span></div>
            <div class="key" data-code="KeyQ"><span>q</span></div>
            <div class="key" data-code="KeyW"><span>w</span></div>
            <div class="key" data-code="KeyE"><span>e</span></div>
            <div class="key" data-code="KeyR"><span>r</span></div>
            <div class="key" data-code="KeyT"><span>t</span></div>
            <div class="key" data-code="KeyY"><span>y</span></div>
            <div class="key" data-code="KeyU"><span>u</span></div>
            <div class="key" data-code="KeyI"><span>i</span></div>
            <div class="key" data-code="KeyO"><span>o</span></div>
            <div class="key" data-code="KeyP"><span>p</span></div>
            <div class="key" data-code="BracketLeft"><span>[</span></div>
            <div class="key" data-code="BracketRight"><span>]</span></div>
            <div class="key" data-code="Backslash"><span>\\</span></div>
        </div>
        <div class="row">
            <div class="key caps-lock" data-code="CapsLock"><span>caps lock</span></div>
            <div class="key" data-code="KeyA"><span>a</span></div>
            <div class="key" data-code="KeyS"><span>s</span></div>
            <div class="key" data-code="KeyD"><span>d</span></div>
            <div class="key" data-code="KeyF"><span>f</span></div>
            <div class="key" data-code="KeyG"><span>g</span></div>
            <div class="key" data-code="KeyH"><span>h</span></div>
            <div class="key" data-code="KeyJ"><span>j</span></div>
            <div class="key" data-code="KeyK"><span>k</span></div>
            <div class="key" data-code="KeyL"><span>l</span></div>
            <div class="key" data-code="Semicolon"><span>;</span></div>
            <div class="key" data-code="Quote"><span>'</span></div>
            <div class="key enter" data-code="Enter"><span>return</span></div>
        </div>
        <div class="row">
            <div class="key shift" data-code="ShiftLeft"><span>shift</span></div>
            <div class="key" data-code="KeyZ"><span>z</span></div>
            <div class="key" data-code="KeyX"><span>x</span></div>
            <div class="key" data-code="KeyC"><span>c</span></div>
            <div class="key" data-code="KeyV"><span>v</span></div>
            <div class="key" data-code="KeyB"><span>b</span></div>
            <div class="key" data-code="KeyN"><span>n</span></div>
            <div class="key" data-code="KeyM"><span>m</span></div>
            <div class="key" data-code="Comma"><span>,</span></div>
            <div class="key" data-code="Period"><span>.</span></div>
            <div class="key" data-code="Slash"><span>/</span></div>
            <div class="key shift" data-code="ShiftRight"><span>shift</span></div>
        </div>
        <div class="row">
            <div class="key row-5" data-code="key"><span>fn</span></div>
            <div class="key row-5" data-code="ControlLeft"><span>control</span></div>
            <div class="key row-5" data-code="AltLeft"><span>option</span></div>
            <div class="key command" data-code="MetaLeft"><span>command</span></div>
            <div class="key space" data-code="Space"><span></span></div>
            <div class="key command" data-code="MetaRight"><span>command</span></div>
            <div class="key  row-5" data-code="AltRight"><span>option</span></div>
            <div class="key move left" data-code="ArrowLeft"><span>◀</span></div>
            <div class="move">
                <div class="key move" data-code="ArrowUp"><span>▲</span></div>
                <div class="key move" data-code="ArrowDown"><span>▼</span></div>
            </div>
            <div class="key move right" data-code="ArrowRight"><span>▶</span></div>
        </div>

    </section>
</main>
</div>
`;