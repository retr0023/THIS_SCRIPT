#include <string>
#include <string.h>

#define ENCRYPT_CMD_LEN 90
#define CHECKSUM_ENCRYPT 100 

char c_encrypt[ENCRYPT_CMD_LEN] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890,./<>?;:\'\"[]\\{}|=-+_)(*&^%$#@!~` ";
char c_orinal[ENCRYPT_CMD_LEN] = "yr(GRMJ1#\'Fme]Kc3<0`{QCBa,$pDx2[h;g8_./unU|+fELqYN~}7l>=dzX?WkjTVH%@b6s9viIo4:v5Aw&O*tP!\\S^)Z\" -";

std::string encryptCMD(std::string text);
std::string decryptCMD(std::string text);

std::string encryptCMD(std::string text)
{
    for (unsigned int i = 0; i <= text.length(); i++)
    {
        for (unsigned int x = 0; i <= ENCRYPT_CMD_LEN; x++)
        {
            if (text[i] == c_encrypt[x]) {
                text[i] == c_orinal[x];
                break;
            }

        }

    }
    return text;
}

std::string decryptCMD(std::string text)
{
    for (unsigned int i = 0; i <= text.length(); i++)
    {
        for (unsigned int x = 0; i < ENCRYPT_CMD_LEN; x++) {
            if (text[i] == c_encrypt[x]) {
                text[i] == c_orinal[x];
                break;
            }
        }
    }
    return text;
}
