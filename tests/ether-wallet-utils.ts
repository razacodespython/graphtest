import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { Donated, Withdrawn } from "../generated/EtherWallet/EtherWallet"

export function createDonatedEvent(sender: Address): Donated {
  let donatedEvent = changetype<Donated>(newMockEvent())

  donatedEvent.parameters = new Array()

  donatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return donatedEvent
}

export function createWithdrawnEvent(
  amount: BigInt,
  sender: Address
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return withdrawnEvent
}
