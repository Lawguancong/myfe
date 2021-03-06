/**
 * Created by Law.guancong on 2017/4/8.
 */
//jsx ����

var Photowall = React.createClass({
    getInitialState: function () {
        return {
            picture: [{
                style: {
                    top: 0,
                    left: 0,
                    transform : "rotate(10deg)"
                },
                rotate: 0,
                isCenter: false,
                isInverse: false
            }],

        };
    },
    const: {
        centerPos: {
            top: 0,
            left: 0
        },
        xLeftMin: 0,
        xLeftMax: 0,
        xRightMin: 0,
        xRightMax: 0,
        yMin: 0,
        yMax: 0
    },
    componentDidMount: function () {
        var stageDOM = this.refs.stage,
            wStageDOM = stageDOM.offsetWidth,
            hStageDOM = stageDOM.offsetHeight,
            wHalfStageDOM = wStageDOM / 2,
            hHalfStageDOM = hStageDOM / 2;
        var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure),
            wImgFigureDOM = imgFigureDOM.offsetWidth,
            hImgFigureDOM = imgFigureDOM.offsetHeight,
            wHalfImgFigureDOM = wImgFigureDOM / 2,
            hHalfImgFigureDOM = hImgFigureDOM / 2;
        //计算图片位置的取值范围
        this.const = {
            centerPos: {
                top: hHalfStageDOM - hHalfImgFigureDOM,
                left: wHalfStageDOM - wHalfImgFigureDOM
            },
            xLeftMin: -wHalfImgFigureDOM,
            xLeftMax: wHalfStageDOM - 3 * wHalfImgFigureDOM,
            xRightMin: wHalfStageDOM + wHalfImgFigureDOM,
            xRightMax: wStageDOM - wHalfImgFigureDOM,
            yMin: -hHalfImgFigureDOM,
            yMax: hStageDOM - hHalfImgFigureDOM
        };
        this.rearrange(0);
    },
    rearrange : function (index) {
        for (var i = 0; i < this.state.picture.length; i++) {
            if (i < this.state.picture.length / 2) {
                this.state.picture[i].style = {
                    top: Random(this.const.yMin, this.const.yMax),
                    left: Random(this.const.xLeftMin, this.const.xLeftMax)
                };
            } else {
                this.state.picture[i].style = {
                    top: Random(this.const.yMin, this.const.yMax),
                    left: Random(this.const.xRightMin, this.const.xRightMax)
                };
            }
            this.state.picture[i].style.transform =  "rotate("+ Random(-30,30)+"deg)"
            this.state.picture[i].isCenter = false;
            this.state.picture[i].isInverse = false;
        }
        this.state.picture[index].style = this.const.centerPos;
        this.state.picture[index].style.transform =  "rotate(0deg)"
        this.state.picture[index].isCenter = true;
        this.setState()// picture : this.state.picture
    },
    handleClick : function (index) {
        return function () {
            if(this.state.picture[index].isCenter){
                // console.log(this.state.picture[index].isCenter)
                if(!this.state.picture[index].isInverse){
                    this.state.picture[index].style.transform =  "rotateY(180deg)"
                    this.setState()
                    this.state.picture[index].isInverse = !this.state.picture[index].isInverse
                }else{
                    this.state.picture[index].style.transform =  "rotateY(0deg)"
                    this.setState()
                    this.state.picture[index].isInverse = !this.state.picture[index].isInverse

                }
            }else{
                this.rearrange(index)
            }
        }.bind(this)
    },

    render : function () {
        var pictureArr = []
        var radiusArr = []
        imgData.forEach(function (value,index) {
            if(!this.state.picture[index]){
                this.state.picture[index] = {
                    style : {
                        top : 0,
                        left : 0,
                        transform : "rotate(10deg)"
                    },
                    rotate : 0,
                    isCenter : false,
                    isInverse : false
                }
            }
            pictureArr.push(<div key={index} onClick={this.handleClick(index)} ref="imgFigure" style={this.state.picture[index].style}>
                <img src={"img/" + (index+1) + ".jpg"} alt=""/>
                <div>
                    {value.title} <br/>
                    <div className="imageBack">
                        {value.desc}
                    </div>
                </div>
            </div>)
        }.bind(this))
        // console.log(this.state.picture)
        return (
            <div className="stage" ref="stage">
                <div className="picture">
                    {pictureArr}
                </div>
                <div className="radius">
                    {radiusArr}
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <Photowall/>,
    document.getElementById("photowall")
)
function Random(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);

}