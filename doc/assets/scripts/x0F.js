export default class x0F
{
    canvas
    context

    constructor()
    {
        this.canvas = this.getCanvas(`x0f`)
        this.context = this.getContext(this.canvas)
    }

    getCanvas(id)
    {
        window[id].width = innerWidth
        window[id].height = innerHeight

        return window[id]
    }

    getContext(canvas)
    {
        const context = canvas.getContext("2d")

        context.font = "16px Arial"
        context.globalCompositeOperation = `destination-over`
        
        // context.fillStyle = `blue`
        // context.fillRect(0, 0, canvas.width, canvas.height)

        return context
    }

    line(x1, y1, x2, y2, thickness = 1)
    {
        const lineWidth = this.context.lineWidth

        this.context.lineWidth = thickness ?? 1
        this.context.beginPath()
        this.context.moveTo(x1, y1)
        this.context.lineTo(x2, y2)
        this.context.strokeStyle = `yellow`
        this.context.stroke()
        this.context.lineWidth = lineWidth
    }

    clear()
    {
        const fillStyle = this.context.fillStyle

        this.context.fillStyle = `#444444`
        this.context.fillRect(0, 0, innerWidth, innerHeight)
        this.context.fillStyle = fillStyle
    }

    static load(ev)
    {
        window.x0F = new x0F()

        console.log(window.x0F)
    }
}
