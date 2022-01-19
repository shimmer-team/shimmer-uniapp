<template>
	<view>
		<view class="swiper-css zqui-rel" :style="{ height: hpx }">
			<swiper class="swiper" :style="{ height: hpx }" :indicator-dots="indicatorDots" :autoplay="autoplay"
				:interval="interval" :duration="duration" @change="guideAction">
				<swiper-item class="flex1" v-for="(item, index) in imageList" :key="index">
					<image class="flex-column image-size" mode="widthFix" :src="item.src" />
					<view class="flex-column title-box">
						<view class="guide-title">{{item.name}}</view>
						<view class="guide-subtitle">{{item.subtitle}}</view>
					</view>
				</swiper-item>
			</swiper>
			<!-- 按钮样式切换 -->
			<template v-if="cur != 2">
				<view class=" flex-column dots">
					<block v-for="(item,index) in imageList" :key="index">
						<view class="dot" :class="{'active':  index == cur}"></view>
					</block>
				</view>
			</template>
			<!-- 第三张图使用按钮《立即进入》 -->
			<template v-if="cur == 2">
				<button class="flex-column cu-btn footer" @click="launchApp">创建账号</button>
			</template>
			<!-- 右上角跳过按钮 -->
			<!-- <view class="btn-box" @click="launchApp"><text class="passbtn">跳过</text></view> -->
		</view>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation');
	export default {
		data() {
			return {
				//修改图片,文字描述
				imageList: [{
					name: '欢迎使用萤火',
					subtitle: '这是一款工具类软件',
					src: '/static/guide/guide01.png'
				},
				{
					name: '请记住初始密码为123456',
					subtitle: 'The initial password is 123456',
					src: '/static/guide/guide02.png'
				},
				{
					name: '接下来请切换为横屏操作',
					subtitle: 'Next, please switch to horizontal screen	operation',
					src: '/static/guide/guide03.png'
				}
				],
				indicatorDots: false,
				autoplay: false,
				interval: 10000,
				duration: 500,
				iStatusBarHeight: '0px',
				hpx: '100%',
				cur: 0,
				dotsStyles: ''
			};
		},
		//页面显示时切换为竖屏配置
		onShow() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			// #endif
		},
		//页面卸载时切换为横屏配置
		onUnload() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('landscape-primary'); //锁死屏幕方向为竖屏
			// #endifs
		},
		onLoad() {
			let that = this;
			plus.navigator.closeSplashscreen();
			uni.getSystemInfo({
				success: function (res) {
					that.hpx = res.windowHeight + 'px';
				}
			});
		},
		onReady() {
			this.move(0, 1); ei
		},
		methods: {
			launchApp() {
				//跳过引导页,储存本地值,下次进入直接跳过
				uni.setStorage({
					key: 'launchFlag',
					data: true,
					success() {
						uni.redirectTo({
							url: '/pages/index/index'
						});
					}
				});
			},
			guideAction(event) {
				let that = this,
					index = event.detail.current;
				that.cur = index;
				if (index == 0) {
					that.move(0, 1);
					that.moveTwo(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(0);
				}
				if (index == 1) {
					that.moveTwo(0, 1);
					that.move(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(uni.upx2px(80) + 'px');
				}
				if (index == 2) {
					that.moveThree(0, 1);
					that.moveTwo(150, 0.1);
					that.move(150, 0.1);
					that.lefMainAction(uni.upx2px(160) + 'px');
				}
			},
			lefMainAction(mum) {
				var testLM = this.$refs.lefMain;
				animation.transition(
					testLM, {
					styles: {
						transform: 'translate(' + mum + ',0px)'
					},
					duration: 400, //ms
					timingFunction: 'ease',
					delay: 0 //ms
				},
					function () { }
				);
			},
			move(tran, opa) {
				var testEl = this.$refs.box1;
				animation.transition(
					testEl, {
					styles: {
						transform: 'translate(' + tran + 'px,0px)',
						transformOrigin: 'center center',
						opacity: opa
					},
					duration: 800, //ms
					timingFunction: 'ease',
					delay: 0 //ms
				},
					function () { }
				);
				var textE2 = this.$refs.box2;
				animation.transition(
					textE2, {
					styles: {
						transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
						transformOrigin: 'center center',
						opacity: opa
					},
					duration: 800, //ms
					timingFunction: 'ease',
					delay: 0 //ms
				},
					function () { }
				);
			},
			moveTwo(tran, opa) {
				var testEl = this.$refs.box3;
				animation.transition(
					testEl, {
					styles: {
						transform: 'translate(' + tran + 'px,0px)',
						transformOrigin: 'center center',
						opacity: opa
					},
					duration: 800, //ms
					timingFunction: 'ease',
					delay: 0 //ms
				},
					function () { }
				);
				var textE2 = this.$refs.box4;
				animation.transition(
					textE2, {
					styles: {
						transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
						transformOrigin: 'center center',
						opacity: opa
					},
					duration: 800, //ms
					timingFunction: 'ease',
					delay: 0 //ms
				},
					function () { }
				);
			},
			moveThree(tran, opa) {
				var testEl = this.$refs.box5;
				animation.transition(
					testEl, {
					styles: {
						transform: 'translate(' + tran + 'px,0px)',
						transformOrigin: 'center center',
						opacity: opa
					},
					duration: 800, //ms
					timingFunction: 'ease',
					delay: 0 //ms
				},
					function () { }
				);
				var textE2 = this.$refs.box6;
				animation.transition(
					textE2, {
					styles: {
						transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
						transformOrigin: 'center center',
						opacity: opa
					},
					duration: 800, //ms
					timingFunction: 'ease',
					delay: 0 //ms
				},
					function () { }
				);
			}
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
		min-height: 100%;
		height: 100%;
	}

	.guide {
		flex-direction: column;
		flex: 1;
	}

	.flex1 {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.image-size {
		width: 100%;
		height: 441pt;
	}

	.title-box {
		margin-top: 47pt;
		text-align: center;
	}

	.guide-title {
		font-size: 16pt;
		font-weight: bold;
		color: #333333;
	}

	.guide-subtitle {
		margin-top: 20rpx;
		font-size: 12pt;
		color: #484747;
		line-height: 50rpx;
	}

	.footer {
		display: block;
		width: 133pt;
		line-height: 36pt;
		height: 36pt;
		text-align: center;
		margin: 0 auto;
		margin-top: -77pt;
		font-size: 16pt;
		color: #F8F4F4;
		border-radius: 24pt;
		background-color: #E96D65;
	}

	.btn-box {
		position: absolute;
		z-index: 999;
		right: 40rpx;
		top: 120rpx;
	}

	.dots {
		display: flex;
		justify-content: center;
		position: absolute;
		z-index: 999;
		height: 42pt;
		left: 24pt;
		bottom: 40pt;
	}

	.passbtn {
		color: #838892;
		text-align: center;
		border-width: 1rpx;
		border-color: rgba(0, 0, 0, 0.5);
		border-style: solid;
		border-radius: 30rpx;
		font-size: 28rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}

	.dot {
		margin: 0 4pt;
		width: 8pt;
		height: 8pt;
		background: #FFDFD6;
		border-radius: 50%;
		transition: all .6s;
	}

	.dot.active {
		width: 20pt;
		height: 8pt;
		border-radius: 4pt;
		background: #E96D65 !important;
	}

	/* 相对定位 */
	.zqui-rel {
		position: relative;
	}

	.swiper-css {
		width: 750rpx;
	}

	.swiper-item {
		width: 750rpx;
	}
</style>