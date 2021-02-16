#! /bin/bash
md5sum ./src/public/IQuestradeAPIv2_0.ts >./src/public/IQuestradeAPIv2_0.sum.txt
sha1sum ./src/public/IQuestradeAPIv2_0.ts >>./src/public/IQuestradeAPIv2_0.sum.txt
sha256sum ./src/public/IQuestradeAPIv2_0.ts >>./src/public/IQuestradeAPIv2_0.sum.txt
sha512sum ./src/public/IQuestradeAPIv2_0.ts >>./src/public/IQuestradeAPIv2_0.sum.txt

# ⑆ yarn sum
# yarn run v1.22.10
# % ./scripts/sums.sh
# 275645cd39414202815368a7a33611af  ./src/public/IQuestradeAPIv2_0.ts
# 06d1c6b26b4928c37c0b4f9e7bc3a0b05f840aec  ./src/public/IQuestradeAPIv2_0.ts
# 68531cc90742d4c228314287c9cede25b9730f048743a06d113a28a92ceddca2  ./src/public/IQuestradeAPIv2_0.ts
# d8dd9f8f52e4b5f575e79acc010f363ff290821610267b51f06287e5a1ba7a78adbf984acd27a2807caf544562c08d9c836362da8db646ff70c038e814fe3cad  ./src/public/IQuestradeAPIv2_0.ts
# Done in 0.10s.
