// 그래픽 상태를 관리하는 유틸리티

// 그래픽스를 최근에 저장된 상태로 돌리지만, 스텍에서 뽑아내지는 않는다.
CanvasRenderingContext2D.prototype.revert = function() {
    this.restore();  // Restore the old graphics state.
    this.save();     // Save it again so we can go back to it.
    return this;     // Allow method chaining.
};

// 객체 o에 지정된 프로퍼티를 그래픽스 속성으로 설정한다
// 또는 인자가 전달되지 않았다면, 현재 속성을 객체로 반환한다.
// 그래픽 변형이나 영역 자르기는 처리하지 않는다.
CanvasRenderingContext2D.prototype.attrs = function(o) {
    if (o) {
        for(var a in o)       // o의 각 프로퍼티마다
            this[a] = o[a];   // 그래픽스 속성으로 설정한다.
        return this;          // 메서드 체이닝을 가능하게 한다.
    }
    else return {
        fillStyle: this.fillStyle, font: this.font,
        globalAlpha: this.globalAlpha,
        globalCompositeOperation: this.globalCompositeOperation,
        lineCap: this.lineCap, lineJoin: this.lineJoin,
        lineWidth: this.lineWidth, miterLimit: this.miterLimit,
        textAlign: this.textAlign, textBaseline: this.textBaseline,
        shadowBlur: this.shadowBlur, shadowColor: this.shadowColor,
        shadowOffsetX: this.shadowOffsetX, shadowOffsetY: this.shadowOffsetY,
        strokeStyle: this.strokeStyle
    };
};
