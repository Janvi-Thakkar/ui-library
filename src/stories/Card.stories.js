import CardComponent from '../components/Card/Card.vue';

export default {
    title: 'card',
    component: CardComponent,
};


export const Normal = () => ({
    components: { CardComponent },
    setup() {
       function cardStyle() {
            return { backgroundColor: '#E3F2E8', display: 'flex' }
       }

       return {cardStyle}
    },

    template: '<CardComponent classname="margin_1 hover" :style="cardStyle"><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >'

})

export const Class = () => ({
    components: { CardComponent },
    setup() {
        function cardStyle() {
            return { backgroundColor: '#E3F2E8', display: 'flex' }
        }

        return { cardStyle }
    },

    template: '<CardComponent classname="margin_1 hover"><p> Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >'

})

export const FunctionalStyling = () => ({
    components: { CardComponent },
    setup() {
        function cardStyle() {
            return { backgroundColor: '#E3F2E8', display: 'flex' }
        }

        return { cardStyle }
    },

    template: '<CardComponent :style="cardStyle"><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >'

})

export const Styling = () => ({
    components: { CardComponent },
  
    template: '<CardComponent :style="{display:`flex`}"><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >'

})


export const InbuiltEffects = () => ({
    components: { CardComponent },
    template: '<CardComponent hoverEffect=true noShadow=true defaultBorder=true><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >'

})


//export const Normal = Template.bind({});
//export const Class = Template.bind({});
//export const FunctionalStyling = Template.bind({});
//export const Styling = Template.bind({});
//export const InbuiltEffects = Template.bind({});
//export const Error = Template.bind({});
//export const Info = Template.bind({});
//export const SolidSuccess = Template.bind({});
//export const SolidError = Template.bind({});
//export const SolidInfo = Template.bind({});
//export const SolidPrimary = Template.bind({});
//export const SolidGradient = Template.bind({});
//export const SolidWarning = Template.bind({});
//export const Warning = Template.bind({});


//Normal.args = {
    
//};

//Class.args = {
//    classname:"margin_1 hover"
//};

//FunctionalStyling.args = {
//    style:function (){
//        return { backgroundColor: '#E3F2E8', display: 'flex' }
//    }
//};


//Styling.args = {
//    style: { display: 'flex' } 
//};

//InbuiltEffects.args={
//    hoverEffect:true,
//    noShadow:true,
//    defaultBorder:true
//}



////SolidSuccess.args = {
////    set: { type: "success", title: "Solid Success", message: "message", time: 5000, varient: "solid" }
////};

//SolidError.args = {
//    set: { type: "error", title: "Solid Error", message: "message", time: 5000, varient: "solid" }
//};

//SolidInfo.args = {
//    set: { type: "info", title: "Solid Info", message: "message", time: 5000, varient: "solid" }
//};

//SolidPrimary.args = {
//    set: { type: "primary", title: "Solid Primary", message: "message", time: 5000, varient: "solid" }
//};

//SolidGradient.args = {
//    set: { type: "gradient", title: "Solid Gradient", message: "message", time: 5000, varient: "solid" }
//};

//Warning.args = {
//    set: { type: "warning", title: "Warning", message: "message", time: 5000 }
//};

//SolidWarning.args = {
//    set: { type: "warning", title: "Solid Warning", message: "message", time: 5000, varient: "solid" }
//};
