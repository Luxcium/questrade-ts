import * as dns from 'dns';

import { tryLog } from './tryLog';
// import { promises : { Resolver} } from 'dns';
const { promises, Resolver } = dns;

// console.log(dns.getServers());
// console.log(dns.getServers());

void dns.promises.Resolver;

// export async function funct() {
//
// }
//
(async function () {
  // Create
  const dnsResolver = new Resolver();
  const dnsPromisesResolver = new promises.Resolver();

  void dns;
  void dnsResolver;
  void dnsPromisesResolver;

  dns.setServers(['1.1.1.1', '1.0.0.1']);
  dnsResolver.setServers(['1.1.1.2', '1.0.0.2']);
  dnsPromisesResolver.setServers(['1.1.1.3', '1.0.0.3']);

  console.log(dns.getServers());
  console.log(dnsResolver.getServers());
  console.log(dnsPromisesResolver.getServers());

  const testSite = 'facebook.ca'; // 'neb401.com';
  // console.log(await dns.promises.lookup('nodejs.org'));

  tryLog('resolve', () => dnsPromisesResolver.resolve(testSite));
  tryLog('resolve4', () => dnsPromisesResolver.resolve4(testSite));
  tryLog('resolve6', () => dnsPromisesResolver.resolve6(testSite));
  tryLog('resolveAny', () => dnsPromisesResolver.resolveAny(testSite));
  tryLog('resolveCname', () => dnsPromisesResolver.resolveCname(testSite));
  tryLog('resolveMx', () => dnsPromisesResolver.resolveMx(testSite));
  tryLog('resolveNaptr', () => dnsPromisesResolver.resolveNaptr(testSite));
  tryLog('resolveNs', () => dnsPromisesResolver.resolveNs(testSite));
  tryLog('resolvePtr', () => dnsPromisesResolver.resolvePtr(testSite));
  tryLog('resolveSoa', () => dnsPromisesResolver.resolveSoa(testSite));
  tryLog('resolveSrv', () => dnsPromisesResolver.resolveSrv(testSite));
  tryLog('resolveTxt', () => dnsPromisesResolver.resolveTxt(testSite));
  tryLog('reverse', () => dnsPromisesResolver.reverse('31.13.67.35'));
  // tryLog('getServers', ()=> dnsPromisesResolver.getServers(testSite))
  // tryLog('resolveCaa', ()=> dnsPromisesResolver.resolveCaa(testSite))
  // tryLog( 'setServers',()=> dnsPromisesResolver.setServers([testSite]))

  /*

  console.log( await dnsPromisesResolver.getServers('neb401.com'))
  console.log( await dnsPromisesResolver.resolve('neb401.com'))
  console.log( await dnsPromisesResolver.resolve4('neb401.com'))
  console.log( await dnsPromisesResolver.resolve6('neb401.com'))
  console.log( await dnsPromisesResolver.resolveAny('neb401.com'))
  console.log( await dnsPromisesResolver.resolveCaa('neb401.com'))
  console.log( await dnsPromisesResolver.resolveCname('neb401.com'))
  console.log( await dnsPromisesResolver.resolveMx('neb401.com'))
  console.log( await dnsPromisesResolver.resolveNaptr('neb401.com'))
  console.log( await dnsPromisesResolver.resolveNs('neb401.com'))
  console.log( await dnsPromisesResolver.resolvePtr('neb401.com'))
  console.log( await dnsPromisesResolver.resolveSoa('neb401.com'))
  console.log( await dnsPromisesResolver.resolveSrv('neb401.com'))
  console.log( await dnsPromisesResolver.resolveTxt('neb401.com'))
  console.log( await dnsPromisesResolver.reverse('neb401.com'))
  console.log( await dnsPromisesResolver.setServers('neb401.com'))

   */
  // + const addresses = await resolver.resolve4('sndc-card.com.rs0m5o.cn');
  // + console.log(addresses);
})();
