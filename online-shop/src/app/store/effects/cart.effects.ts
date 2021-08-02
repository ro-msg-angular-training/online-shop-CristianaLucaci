import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {distinctUntilChanged, map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {
  AddCartItem, AddCartItemSuccess,
  ECartActions, LoadCartItems, LoadCartItemsSuccess,
  PlaceOrder, PlaceOrderSuccess,
  RemoveCartItem, RemoveCartItemSuccess, SaveCartItemsSuccess
} from "../actions/cart.actions";
import {CartService} from "../../services/cart.service";
import {IAppState} from "../state/app.state";
import {Action, Store} from "@ngrx/store";
import {selectCartItems} from "../selectors/cart.selectors";
import {selectAuthUsername} from "../selectors/auth.selectors";


@Injectable()
export class CartEffects {
  constructor(
    private cartService: CartService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

}
