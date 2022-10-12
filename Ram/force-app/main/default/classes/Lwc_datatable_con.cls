public with sharing class Lwc_datatable_con {

    @AuraEnabled

    public static List<Contact>cc(){

        Return [Select Id,Phone,Email from Contact];

       

    }
}

   