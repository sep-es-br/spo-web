import {
  CanActivateChildFn,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from '@angular/router';

export const authGuard: CanActivateChildFn = (route, state) => {
  let loginPageReroute;
  let logado = checarLogin();

  if (logado) {
    if( route.routeConfig?.path === 'login' )
      return reRouteTo('');
    else
      return true;
  } else {
    if( route.routeConfig?.path === 'login' )
      return true
    else 
      return reRouteTo('login')
  }

};

function reRouteTo(path : string) : UrlTree {
    return new UrlTree(
      new UrlSegmentGroup([], {
        primary: new UrlSegmentGroup([new UrlSegment(path, {})], {}),
      })
    );
}


function checarLogin() : boolean{
  const storageToken = sessionStorage.getItem('token');

  return !!storageToken;
}