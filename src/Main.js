/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2017, 6, 31) // 你们的毕业
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>哈喽！wuli趴布猪！</h1>
                    <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
                    <p>那年夏天，我无比憧憬大学；今年夏天，我却无比憧憬那年。</p>
                    <p>你总说毕业遥遥无期，可是转眼间，我们就要各奔东西。
                    晨昏欢笑，情如手足，义重泰山，怎奈光阴流逝，岁月不返。
                    聚也不是开始，散也不是结束，同窗数载凝的无数美好瞬间，将永远铭刻在我的记忆之中
                    山海可以阻隔彼此，却阻隔不了我的思念，距离可以拉开你我，却拉不开真挚的情谊，时间可以淡忘过去，却忘不了永远的朋友
                </p>
                    <p>我不知道离别的滋味是这样凄凉，我不知道说声再见要这么坚强。只有分离，让时间去忘记这一份默契。
                    我的生活融入了你，你的生活中也蕴涵着我；当我们再次相见的时刻，你我仍然是一个整体。
                </p>
                    <p>离别不是结束，而是美丽思念的开始；海内存知己，天涯若比邻；送君千里，当需一别，
                    轻轻地，我们走了，正如我们轻轻地来。挥一挥手，作别青青的校园。我们在这里留下灿烂的笑容，在这里，祝福你未来的日子更精彩。
                    相逢又告别，归帆又离岸，是往日欢乐的终结，未来幸福的开端。
                </p>
                    <p>这几年，仿佛一瞬间，我们同欢笑，同拼搏，我们欣赏着彼此最美好的成长历程，我们经历着最刻骨铭心的青春韶华，同学，再见，朋友，一生。
                </p>
                    <p>那年成了往昔，此年在淡淡忆起，一脸笑意却也差一点哭泣，很多事存于心底只能珍惜，岁月慢慢逝去，你和我都在哪里？</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>青春韶华，有幸，与你相识，感谢我的青春有个你</p>
                        <p>2019年8月17日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main