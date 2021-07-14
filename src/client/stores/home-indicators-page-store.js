import {makeAutoObservable,action} from "mobx"
import {apiClient} from "../api/apiClient";
import {getAqiIcon} from "../utils/index"

class HomeIndicatorsPageStore{
    safety  = undefined;
    health= undefined;
    administration= undefined;
    ecology = undefined;
    pageLoading = undefined;

    constructor() {
        this.pageLoading=false;
        makeAutoObservable(this,{

        }
        );
    }

    pullPage(){
      this.pageLoading=true;
      return apiClient.common.indicators().then(action(res=>{
          console.log(res.data);
          this.health = res.data.health;
          this.ecology = res.data.ecology;
          this.safety= res.data.safety;
          this.administration= res.data.administration;
          console.log("health last 7 days:",this.health.last7Days)
      })).catch(action((error)=> {
          console.log("error at :",error);
          this.error =  error;
      }))
          .finally(action(()=> this.pageLoading=false))
    }
    resetPage() {
        this.errors = undefined;
    }

    get indicators(){
        const noData = "No Data";
        return [
            {
                title:"Ecology",
                path:"/ecology-page",
                subtitle:"AQI rate for month",
                bg:"#4391DB",

                indicators:[

                    {
                        rate:this.ecology?.today ?? noData,
                        text:" AQI today",
                        icon: getAqiIcon(this.ecology?.today,"icon")
                    },
                    {
                        rate:this.ecology?.thisMonth ?? noData,
                        text:" AQI current month",
                        icon: getAqiIcon(this.ecology?.thisMonth,"icon")


                    } ,
                    {
                        rate:this.ecology?.lastMonth?? noData,
                        text:" AQI last month",
                        icon: getAqiIcon(this.ecology?.lastMonth,"icon")


                    }]
            },
            {
                title:"Health",
                path:"/health-page",
                bg:"#45B85F",
                subtitle:"Emergency call quantity",
                indicators:[

                    {
                        bigRate:this.health?.last7Days ?? noData,
                        text:"this week"
                    },
                    {
                        bigRate:this.health?.between7And14Days ?? noData,
                        text:"last week"
                    } ]
            },
            {
                title:"Safety",
                path:"/safety-page",
                bg:"#32A0AF",
                subtitle:"Accident quantity",
                indicators:[
                    {
                        bigRate:this.safety?.last7Days?? noData,
                        text:"this week"

                    },
                    {
                        bigRate:this.safety?.between7And14Days ?? noData,
                        text:"last week"
                    } ,
                  ]
            },
            {
                title:"Administration",
                bg:"#A544A1",
                path:"/administration-page",
                subtitle:"Accident quantity",
                indicators:[
                    {
                        bigRate:this.safety?.last7Days?? noData,
                        text:"this weeek"
                    },
                    {
                        between7And14Days:this.safety?.between7And14Days ?? noData,
                        text:"last  weeek"

                    }]
            }
        ]

    }
}

export default  new HomeIndicatorsPageStore()