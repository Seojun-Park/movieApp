export default {
    maxWidth: "935px",
    bgColor: "#FAFAFA",
    blackColor: "#262626",
    darkGreenColor: "#112026",
    darkGreyColor: "#999",
    lightGreyColor: "#c7c7c7",
    redColor: "#ED4956",
    blueColor: "#3897f0",
    darkBlueColor: "#003569",
    boxBorder: "1px solid #e6e6e6",
    borderRadius: "4px",
    whiteBox: `border: 1px solid #e6e6e6"
               border-radius: 4px;
               background-color:white;
               `,
    colorBor:`
                /* Variables */
                $hoverBgColor : #503bff;
                $hoverBgColor2: #8293ff;
                
                /* Mixins */
                @mixin createBox($width, $height, $bRadius, $bgColor, $margin){
                width: $width;
                height: $height;
                border-radius: $bRadius;
                background-color: $bgColor;
                margin: $margin;
                transition: .3s all ease-in-out;
                }
                
                body{
                font-family: "Dosis",sans-serif;
                }
                
                .container{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                flex-wrap: wrap;
                height: 97vh;
                .box 
                {
                    @include createBox(250px, 250px, 10px, white, 20px);
                    position: relative;
                    box-shadow: 0px 0px 15px background;
                    .boxContent{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 15px;
                    .icon{
                        color: #8293ff;
                        font-size: 48px;
                        padding: 15px;
                    }
                    .title{
                        font-size: 24px;
                        color: #8293ff;
                        font-weight: bold;
                        padding: 10px;
                    }
                    .desc{
                        color: #8293ff;
                        font-size: 15px;
                        height: 20%;
                    }
                
                    }
                    /* Link */
                    a{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    }
                    &:hover{
                    background: linear-gradient(130deg, $hoverBgColor 0%, $hoverBgColor2 100%);
                    box-shadow: none;
                    .icon,
                    .title,
                    .desc{
                        color: white;
                        transition: .3s all ease-in-out;
                    }
                    }
                }
            }
    `
}