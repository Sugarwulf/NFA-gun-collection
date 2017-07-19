namespace nfa.Services {
  export class GunService {
    private GunResource;
    // public GunResource

   public saveGun(gun) {
     this.GunResource.save(gun);
   }

   public getGuns() {
     return this.GunResource.query();
   }

   public removeGun(id) {
   this.GunResource.delete({id:id});
   }

   public constructor(
     public $resource
   ) {
     this.GunResource = $resource('/guns/:id');
   }
  }

  angular.module('nfa').service('gunService', GunService);
  }
