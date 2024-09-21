export default class x0F
{
    constructor()
    {
        addEventListener(`load`, this.load)
    }

    load(ev)
    {
        console.log(this.constructor.name)
    }
}
