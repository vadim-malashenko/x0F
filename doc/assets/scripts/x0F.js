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
        context = canvas.getContext("2d")
        context.font = "16px Arial"
        return context
    }

    static load(ev)
    {
        ev.target.x0F = ev.target.x0F ?? new x0F()
    }
}
