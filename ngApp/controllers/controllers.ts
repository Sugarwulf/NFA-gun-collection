namespace nfa.Controllers {

    export class HomeController {
    public guns

    public deleteGun(id) {
      this.gunService.removeGun(id);
    }

    constructor(
      private gunService
    ) {
      this.guns = gunService.getGuns();
      }
    }

    export class AddGunController {
        public gun

        public addGun() {
        this.gunService.saveGun(this.gun);
        }

      constructor(
        private gunService
      ) {

      }
    }

    export class EditGunController {
        public gun
        public id

        public editGun() {
       this.gun._id = this.id;
       this.gunService.saveGun(this.gun);
        }


        constructor (public $stateParams,
        private gunService
            ) {
        this.id = $stateParams['id'];
        }
    }

}
