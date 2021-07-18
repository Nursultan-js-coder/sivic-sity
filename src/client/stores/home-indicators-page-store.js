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
          this.health = res.data.health;
          this.ecology = res.data.ecology;
          this.safety= res.data.safety;
          this.administration= res.data.administration;
      })).catch(action((error)=> {
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
                    },
                    {
                        dynamic:calculateDynamic( parseInt(this.health?.last7Days),parseInt(this.health?.between7And14Days)) ?? 0,
                        text:"dynamic"
                    }


                ]
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
                    {
                        // dynamic:calculateDynamic(parseInt(this.safety?.last7Days),parseInt(this.safety?.between7And14Days)) ?? 0,
                        dynamic: 0,
                        text:"dynamic"
                    }
                  ]
            },
            {
                title:"Administration",
                bg:"#A544A1",
                path:"/administration-page",
                subtitle:"Accident quantity",
                indicators:[
                    {
                        bigRate:this.administration?.primarySchool?? noData,
                        text:"Primaty Schools"
                    },
                    {
                        bigRate:this.administration?.preSchool ?? noData,
                        text:"Preporation Schools"

                    }]
            }
        ]

    }
}

export default  new HomeIndicatorsPageStore()

function calculateDynamic(newRate,oldRate){
    return Math.floor((((parseInt(newRate)-parseInt(oldRate)))/parseInt(oldRate))*100);
}