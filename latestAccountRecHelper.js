({
    loadAccountRec : function(component, event){
		var action  = component.get("c.getAccount_list");
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
            	component.set("v.acc_lst",response.getReturnValue());    
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
	}
})