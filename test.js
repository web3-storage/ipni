import test from 'ava'
import { Advertisement, BitswapProvider, HttpProvider } from './advertisement.js'
import { createEd25519PeerId, createFromJSON } from '@libp2p/peer-id-factory'
import { multiaddr } from '@multiformats/multiaddr'
import { CID } from 'multiformats/cid'
import { createProvider, Provider } from './provider.js'

test('advertisement', async t => {
  const addr = multiaddr('/dns4/example.org/tcp/443/https')
  const peerId = await createFromJSON({

  })
  const hp = HttpProvider(id, [addr])
  const entries = CID.parse('bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354')
  const context = entries.bytes // make up context id.
  const ad = new Advertisement([hp], entries, context)
})

test('advertisement with 1 provider', async t => {
  const prov = createProvider({
    id: 'Qmb8hPXH8E2kmNWyQvUt4yTXSenBBbd7kUAmWSZ6UksmCC',
    pubKey: 'CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDLhmHURcpa6rO4py71Pu9i2+4RP+dVc6fUV/ew1UENVHdKG5Enrd9My2wy5T45r3CIPooUAvQqS1UP3y6w+VFBmfHOR17Bd0Jpy8daWeKmxW5K0IE3gGYbZiCoXPrOjM7Zjy7rQvFwtqpC1cnbck/XPylrflynkze/7aVCICjnNGQX/otS/Y9nZdUzwPZrnlmJbev86FA+z8HtSjJAO0oCYvJVqC/owlT7Kcf1PpFP0gspMTxfvd8yjkOrEiYdWETHGy92NExX1lihQTcSxAx/GEuFfwCprG/lnzaX2M4KOQcnzzeAzE+nvlWV7SHH3xBD/GowZOpC5LbN+imVTwe1AgMBAAE=',
    privKey: 'CAASqQkwggSlAgEAAoIBAQDLhmHURcpa6rO4py71Pu9i2+4RP+dVc6fUV/ew1UENVHdKG5Enrd9My2wy5T45r3CIPooUAvQqS1UP3y6w+VFBmfHOR17Bd0Jpy8daWeKmxW5K0IE3gGYbZiCoXPrOjM7Zjy7rQvFwtqpC1cnbck/XPylrflynkze/7aVCICjnNGQX/otS/Y9nZdUzwPZrnlmJbev86FA+z8HtSjJAO0oCYvJVqC/owlT7Kcf1PpFP0gspMTxfvd8yjkOrEiYdWETHGy92NExX1lihQTcSxAx/GEuFfwCprG/lnzaX2M4KOQcnzzeAzE+nvlWV7SHH3xBD/GowZOpC5LbN+imVTwe1AgMBAAECggEBALxiuO75YqLhGFXVOhv7ky2YkTYaRpDMKw7cFgLygfJKutg3yBZIVKcKrC44D27pu2oBKWH4kfUMIcI9PUTGobXtPutHGKhPMYQoAXDaPndLzBkoAlNTYDAASj5NQkIqB9VNOYq+PimsitCuftfHaau9ZSOApVbfZ/0ZhZw9lF7ccywrxt2oRs3vWJdpxaNj8pobmMWEBE+st9icfytoYzq0MzeFCKFe1efF6uCbJjjsJN9VlUgmwuoj7LLwk9gui5DTVjWTUZav0fscbdGrTxzDVGN6l1zz61imoYYs6/peaOSpH6ElXqZPVGqx5crX7kISAtVYMwEl1rYvmzdEaYECgYEA5lupGNRmCuNvdul78TkmNpTzo7XxDd3vsuWeD2zSYiHscixag3PwUziOimAFoObE0Q1WrRwUZ0DBMEQlczSglnxwfqcmFTMD10hKZ7iHLDaVSD4VA5SQDjcLB6iGUUJSFGlA3vzbsCAPJ/jiJrTpNXRlAf3pwLmY1wGjpDDYbmUCgYEA4i4UFx+IjRtR7O0sLSPG0PMeMii/H8qvkDOnI+6QVfMM9u7jPfJr3dPgNhGjsiE3KtE9iQ2toAPM7cN1KlFkLtJj1Krbgplq92WUmq0+FGsJ7uJN+v3AW1DMvY3aUKiP36o7YJVFm8aFkJvK28H8dXGowZtnyl4FFjZNr8rYNxECgYEAub1QpFemi8ME/kGXEVK+UCZcKTWrzz2TZ5EjmFZrcHrf9tNyjCmwrrmcnVB9WVaZfeKeb+iDPxoEa5GXDMRzc8OUxVqrJ07CGxUMAYPVYj4EsoJ0WTWxzfRt7VfiLaUnH5QanXIPBX1kGxvf5cvbeqGGTEva7e34oeyNcPd9m80CgYBADcyiv8tsKtCIyKI6JmenxTJIAkIePsh5jidHhchajvqc9ApnAMCLkfVtWpGBYOa+uYMzzSvepTTkIPaNhX9ZwzuCfuCrm8cvSRVMuMNcBPRLMsviyPow4jEZfZLWROZ58TvfnmaYNyCcU4KfudBFcmrYaap7JSVLpRVbM5cIAQKBgQCSP6ekcyZ4zQUTrbnzxhwVHoZqWus5WU9Mhcn32RRIbbMZhU4uRJjy//0MDilgoAbpyA7oUKSYNAZj5QmdMRYyd0lc9+K79eh3qClyZb/zjUcQiJTMSQVSrZHgOsb+sfOd1CYHbHZU8BcYWqBMRdGBxdt/h49JJmDclEYkUF0fYw==',
    addresses: ['/dns4/example.org/tcp/443/https'],
    protocol: 'http',
  })

  const prov = createProvider({
    id: 'Qmb8hPXH8E2kmNWyQvUt4yTXSenBBbd7kUAmWSZ6UksmCC',
    pubKey: 'CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDLhmHURcpa6rO4py71Pu9i2+4RP+dVc6fUV/ew1UENVHdKG5Enrd9My2wy5T45r3CIPooUAvQqS1UP3y6w+VFBmfHOR17Bd0Jpy8daWeKmxW5K0IE3gGYbZiCoXPrOjM7Zjy7rQvFwtqpC1cnbck/XPylrflynkze/7aVCICjnNGQX/otS/Y9nZdUzwPZrnlmJbev86FA+z8HtSjJAO0oCYvJVqC/owlT7Kcf1PpFP0gspMTxfvd8yjkOrEiYdWETHGy92NExX1lihQTcSxAx/GEuFfwCprG/lnzaX2M4KOQcnzzeAzE+nvlWV7SHH3xBD/GowZOpC5LbN+imVTwe1AgMBAAE=',
    privKey: 'CAASqQkwggSlAgEAAoIBAQDLhmHURcpa6rO4py71Pu9i2+4RP+dVc6fUV/ew1UENVHdKG5Enrd9My2wy5T45r3CIPooUAvQqS1UP3y6w+VFBmfHOR17Bd0Jpy8daWeKmxW5K0IE3gGYbZiCoXPrOjM7Zjy7rQvFwtqpC1cnbck/XPylrflynkze/7aVCICjnNGQX/otS/Y9nZdUzwPZrnlmJbev86FA+z8HtSjJAO0oCYvJVqC/owlT7Kcf1PpFP0gspMTxfvd8yjkOrEiYdWETHGy92NExX1lihQTcSxAx/GEuFfwCprG/lnzaX2M4KOQcnzzeAzE+nvlWV7SHH3xBD/GowZOpC5LbN+imVTwe1AgMBAAECggEBALxiuO75YqLhGFXVOhv7ky2YkTYaRpDMKw7cFgLygfJKutg3yBZIVKcKrC44D27pu2oBKWH4kfUMIcI9PUTGobXtPutHGKhPMYQoAXDaPndLzBkoAlNTYDAASj5NQkIqB9VNOYq+PimsitCuftfHaau9ZSOApVbfZ/0ZhZw9lF7ccywrxt2oRs3vWJdpxaNj8pobmMWEBE+st9icfytoYzq0MzeFCKFe1efF6uCbJjjsJN9VlUgmwuoj7LLwk9gui5DTVjWTUZav0fscbdGrTxzDVGN6l1zz61imoYYs6/peaOSpH6ElXqZPVGqx5crX7kISAtVYMwEl1rYvmzdEaYECgYEA5lupGNRmCuNvdul78TkmNpTzo7XxDd3vsuWeD2zSYiHscixag3PwUziOimAFoObE0Q1WrRwUZ0DBMEQlczSglnxwfqcmFTMD10hKZ7iHLDaVSD4VA5SQDjcLB6iGUUJSFGlA3vzbsCAPJ/jiJrTpNXRlAf3pwLmY1wGjpDDYbmUCgYEA4i4UFx+IjRtR7O0sLSPG0PMeMii/H8qvkDOnI+6QVfMM9u7jPfJr3dPgNhGjsiE3KtE9iQ2toAPM7cN1KlFkLtJj1Krbgplq92WUmq0+FGsJ7uJN+v3AW1DMvY3aUKiP36o7YJVFm8aFkJvK28H8dXGowZtnyl4FFjZNr8rYNxECgYEAub1QpFemi8ME/kGXEVK+UCZcKTWrzz2TZ5EjmFZrcHrf9tNyjCmwrrmcnVB9WVaZfeKeb+iDPxoEa5GXDMRzc8OUxVqrJ07CGxUMAYPVYj4EsoJ0WTWxzfRt7VfiLaUnH5QanXIPBX1kGxvf5cvbeqGGTEva7e34oeyNcPd9m80CgYBADcyiv8tsKtCIyKI6JmenxTJIAkIePsh5jidHhchajvqc9ApnAMCLkfVtWpGBYOa+uYMzzSvepTTkIPaNhX9ZwzuCfuCrm8cvSRVMuMNcBPRLMsviyPow4jEZfZLWROZ58TvfnmaYNyCcU4KfudBFcmrYaap7JSVLpRVbM5cIAQKBgQCSP6ekcyZ4zQUTrbnzxhwVHoZqWus5WU9Mhcn32RRIbbMZhU4uRJjy//0MDilgoAbpyA7oUKSYNAZj5QmdMRYyd0lc9+K79eh3qClyZb/zjUcQiJTMSQVSrZHgOsb+sfOd1CYHbHZU8BcYWqBMRdGBxdt/h49JJmDclEYkUF0fYw==',
    addresses: '/ip4/12.34.56.78/tcp/999/ws',
    protocol: 'bitswap',
  })

  const prov = new Provider(
    await createEd25519PeerId(),
    [multiaddr('/dns4/example.org/tcp/443/https')],
    'http'
  )

  const prov = new Provider(
    await createEd25519PeerId(),
    [multiaddr('/dns4/example.org/tcp/443/https')],
    'http'
  )

  const prov = new Provider(
    await createFromJSON({
      id: 'Qmb8hPXH8E2kmNWyQvUt4yTXSenBBbd7kUAmWSZ6UksmCC',
      pubKey: 'CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDLhmHURcpa6rO4py71Pu9i2+4RP+dVc6fUV/ew1UENVHdKG5Enrd9My2wy5T45r3CIPooUAvQqS1UP3y6w+VFBmfHOR17Bd0Jpy8daWeKmxW5K0IE3gGYbZiCoXPrOjM7Zjy7rQvFwtqpC1cnbck/XPylrflynkze/7aVCICjnNGQX/otS/Y9nZdUzwPZrnlmJbev86FA+z8HtSjJAO0oCYvJVqC/owlT7Kcf1PpFP0gspMTxfvd8yjkOrEiYdWETHGy92NExX1lihQTcSxAx/GEuFfwCprG/lnzaX2M4KOQcnzzeAzE+nvlWV7SHH3xBD/GowZOpC5LbN+imVTwe1AgMBAAE=',
      privKey: 'CAASqQkwggSlAgEAAoIBAQDLhmHURcpa6rO4py71Pu9i2+4RP+dVc6fUV/ew1UENVHdKG5Enrd9My2wy5T45r3CIPooUAvQqS1UP3y6w+VFBmfHOR17Bd0Jpy8daWeKmxW5K0IE3gGYbZiCoXPrOjM7Zjy7rQvFwtqpC1cnbck/XPylrflynkze/7aVCICjnNGQX/otS/Y9nZdUzwPZrnlmJbev86FA+z8HtSjJAO0oCYvJVqC/owlT7Kcf1PpFP0gspMTxfvd8yjkOrEiYdWETHGy92NExX1lihQTcSxAx/GEuFfwCprG/lnzaX2M4KOQcnzzeAzE+nvlWV7SHH3xBD/GowZOpC5LbN+imVTwe1AgMBAAECggEBALxiuO75YqLhGFXVOhv7ky2YkTYaRpDMKw7cFgLygfJKutg3yBZIVKcKrC44D27pu2oBKWH4kfUMIcI9PUTGobXtPutHGKhPMYQoAXDaPndLzBkoAlNTYDAASj5NQkIqB9VNOYq+PimsitCuftfHaau9ZSOApVbfZ/0ZhZw9lF7ccywrxt2oRs3vWJdpxaNj8pobmMWEBE+st9icfytoYzq0MzeFCKFe1efF6uCbJjjsJN9VlUgmwuoj7LLwk9gui5DTVjWTUZav0fscbdGrTxzDVGN6l1zz61imoYYs6/peaOSpH6ElXqZPVGqx5crX7kISAtVYMwEl1rYvmzdEaYECgYEA5lupGNRmCuNvdul78TkmNpTzo7XxDd3vsuWeD2zSYiHscixag3PwUziOimAFoObE0Q1WrRwUZ0DBMEQlczSglnxwfqcmFTMD10hKZ7iHLDaVSD4VA5SQDjcLB6iGUUJSFGlA3vzbsCAPJ/jiJrTpNXRlAf3pwLmY1wGjpDDYbmUCgYEA4i4UFx+IjRtR7O0sLSPG0PMeMii/H8qvkDOnI+6QVfMM9u7jPfJr3dPgNhGjsiE3KtE9iQ2toAPM7cN1KlFkLtJj1Krbgplq92WUmq0+FGsJ7uJN+v3AW1DMvY3aUKiP36o7YJVFm8aFkJvK28H8dXGowZtnyl4FFjZNr8rYNxECgYEAub1QpFemi8ME/kGXEVK+UCZcKTWrzz2TZ5EjmFZrcHrf9tNyjCmwrrmcnVB9WVaZfeKeb+iDPxoEa5GXDMRzc8OUxVqrJ07CGxUMAYPVYj4EsoJ0WTWxzfRt7VfiLaUnH5QanXIPBX1kGxvf5cvbeqGGTEva7e34oeyNcPd9m80CgYBADcyiv8tsKtCIyKI6JmenxTJIAkIePsh5jidHhchajvqc9ApnAMCLkfVtWpGBYOa+uYMzzSvepTTkIPaNhX9ZwzuCfuCrm8cvSRVMuMNcBPRLMsviyPow4jEZfZLWROZ58TvfnmaYNyCcU4KfudBFcmrYaap7JSVLpRVbM5cIAQKBgQCSP6ekcyZ4zQUTrbnzxhwVHoZqWus5WU9Mhcn32RRIbbMZhU4uRJjy//0MDilgoAbpyA7oUKSYNAZj5QmdMRYyd0lc9+K79eh3qClyZb/zjUcQiJTMSQVSrZHgOsb+sfOd1CYHbHZU8BcYWqBMRdGBxdt/h49JJmDclEYkUF0fYw=='
    }),
    '/dns4/example.org/tcp/443/https',
    'http'
  )

  const entries = CID.parse('bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354')
  const context = entries.bytes // make up context id.
  const ad = new Advertisement([hp], entries, context)
})

test('advertisement with 2 providers', async t => {
  const addr = multiaddr('/dns4/example.org/tcp/443/https')
  const peerId = await createFromJSON({

  })
  const hp = HttpProvider(id, [addr])
  const entries = CID.parse('bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354')
  const context = entries.bytes // make up context id.
  const ad = new Advertisement([hp], entries, context)
})
