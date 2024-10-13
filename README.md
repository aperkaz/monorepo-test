# `Turborepo` Vite starter

This is an official starter Turborepo.

## Contents

1 `Host` app, async loading 20 packages (`RemoteX`).

Each `Remote` exports 10 modules (30k lines TS each) through 1 react component.

Total: 10 remotes x 10 modules x 30k lines each = **3.000.000 LOC**

## Performance

In M1 Pro with 16GB ram:

- Each Remote is built in `10 seconds`
- The host builds in `52 seconds`
- the host starts local development within less than `200ms`
- HMR in the host is `instantaneous`
