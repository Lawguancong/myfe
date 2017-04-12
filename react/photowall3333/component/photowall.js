/**
 * Created by Law.guancong on 2017/4/8.
 */
//jsx ����
var Picture = React.createClass({
    render : function () {
        console.log("Picture")
        return (
            <div style={this.props.style} onClick={this.props.handleClick}>
                <img src={"img/" + this.props.value.fileName} alt=""/>
                <br/>
                {this.props.value.title}
                <div>
                    {this.props.value.desc}
                </div>
            </div>
        )
    }
})
var Photowall = React.createClass({
    getInitialState: function () {
        console.log("getInitialState")

        return {
            picture: [{
                style: {
                    top: 0,
                    left: 0,
                    transform : "rotate(0deg)"
                },
                rotate: 0,
                isCenter: false,
                isInverse: false
            }],

        };
    },
    const: {
        center: {
            top: 0,
            left: 0,
            transform : "rotate(0deg)"
        },
        xLeftMin: 0,
        xLeftMax: 0,
        xRightMin: 0,
        xRightMax: 0,
        yMin: 0,
        yMax: 0
    },
    componentDidMount: function () {
        console.log("componentDidMount")

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
            center: {
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
        console.log("rearrange")
        for (var i = 0; i < this.state.picture.length; i++) {
            if (i < this.state.picture.length / 2) {
                this.state.picture[i].style = {
                    top: Random(this.const.yMin, this.const.yMax),
                    left: Random(this.const.xLeftMin, this.const.xLeftMax),
                    transform :  "rotate("+ Random(-30,30)+"deg)"

                };
            } else {
                this.state.picture[i].style = {
                    top: Random(this.const.yMin, this.const.yMax),
                    left: Random(this.const.xRightMin, this.const.xRightMax),
                    transform :  "rotate("+ Random(-30,30)+"deg)"
                };
            }
            this.state.picture[i].isCenter = false;
            this.state.picture[i].isInverse = false;
        }
        this.state.picture[index].style = this.const.center;
        this.state.picture[index].isCenter = true;
        this.setState()// picture : this.state.picture
    },
    handleClick : function (index) {
        console.log("handleClick")
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
        console.log(111)

        var pictureArr = []
        var radiusArr = []
        imgData.forEach(function (value,index) {
            if(!this.state.picture[index]){
                this.state.picture[index] = {
                    style : {
                        top : 0,
                        left : 0,
                        transform : "rotate(0deg)"
                    },
                    rotate : 0,
                    isCenter : false,
                    isInverse : false
                }
            }
            pictureArr.push(<Picture value={value} key={index} handleClick={this.handleClick(index)} ref="imgFigure"
                                     style={this.state.picture[index].style}/>)
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