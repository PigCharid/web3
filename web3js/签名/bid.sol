// SPDX-License-Identifier:MIT
pragma solidity 0.8.13;

contract Example {

    struct Person {
        string name;
        address wallet;
    }

    struct Mail {
        Person from;
        Person to;
        string contents;
    }

    bytes32 constant PERSON_TYPEHASH = keccak256(
        "Person(string name,address wallet)"
    );

    bytes32 constant MAIL_TYPEHASH = keccak256(
        "Mail(Person from,Person to,string contents)Person(string name,address wallet)"
    );
    
    struct EIP712Domain {
        string  name;
        string  version;
        uint256 chainId;
    }

    struct VerifyClaim{
        address userAddress;
        uint256 randNo;
        uint256 amount;
    }

    bytes32 constant EIP712DOMAIN_TYPEHASH = keccak256(
        "EIP712Domain(string name,string version,uint256 chainId)"
    );

    bytes32 constant VERIFYCLAIM_TYPEHASH = keccak256(
        "VerifyClaim(address userAddress,uint256 randNo,uint256 amount)"
    );

    bytes32 DOMAIN_SEPARATOR;

    constructor ()  {
        DOMAIN_SEPARATOR = hash(EIP712Domain({
            name: "VerifyClaim",
            version: '1',
            chainId: 97
        }));
    }

    function hash(Person memory person) internal pure returns (bytes32) {
        return keccak256(abi.encode(
            PERSON_TYPEHASH,
            keccak256(bytes(person.name)),
            person.wallet
        ));
    }

    function hash(Mail memory mail) internal pure returns (bytes32) {
        return keccak256(abi.encode(
            MAIL_TYPEHASH,
            hash(mail.from),
            hash(mail.to),
            keccak256(bytes(mail.contents))
        ));
    }

    function hash(EIP712Domain memory eip712Domain) internal pure returns (bytes32) {
        return keccak256(abi.encode(
            EIP712DOMAIN_TYPEHASH,
            keccak256(bytes(eip712Domain.name)),
            keccak256(bytes(eip712Domain.version)),
            eip712Domain.chainId
        ));
    }

    function hash(VerifyClaim memory verifyclaim) internal pure returns (bytes32) {
        return keccak256(abi.encode(
            VERIFYCLAIM_TYPEHASH,
            verifyclaim.userAddress,
            verifyclaim.randNo,
            verifyclaim.amount
        ));
    }

    function verify(VerifyClaim memory verifyclaim, uint8 v, bytes32 r, bytes32 s) internal view returns (bool) {
        // Note: we need to use `encodePacked` here instead of `encode`.
        bytes32 digest = keccak256(abi.encodePacked(
            "\x19\x01",
            DOMAIN_SEPARATOR,
            hash(verifyclaim)
        ));
        return ecrecover(digest, v, r, s) == 0x53dE6A872435F5286BEFd0b6fB3bC06742aF8C8F;
    }
    
    function test(address _userAddress, uint256 _randNO, uint256 _amount, uint8 _v, bytes32 _r, bytes32 _s) public view returns (bool) {
        // Example signed message
        VerifyClaim memory verifyclaim = VerifyClaim({
            userAddress: _userAddress,
            randNo: _randNO,
            amount: _amount
        });
        assert(verify(verifyclaim, _v, _r, _s));
        return true;
    }
}