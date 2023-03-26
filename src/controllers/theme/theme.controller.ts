import {SiteTheme} from '../../models/theme/site-theme';
import {UserTheme} from '../../models/theme/user-theme';

export const createTheme = async (req: any, res: any) => {
  const { theme, description, userId } = req.body;
  try {
    const newTheme = await SiteTheme.create({
      theme,
      description,
      userId
    });
    const themeId: number = newTheme.get('id') as number;
    updateMyTheme(userId, themeId.toString())
    res.json(newTheme);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

const updateMyTheme = (userId: string, themeId: string) => {
  try {
    const userTheme = UserTheme.findOne({
      where: { userId }
    });
    userTheme.then((val: any) => {
      if (val) {
        UserTheme.update(
          {themeId: themeId},
          {
            where: {
              userId: userId,
            },
          }
        )
      } else {
        UserTheme.create({
          themeId,
          userId,
        });
      }
    })
  } catch (error: any) {
    console.log(error, 'Ошибка создания/обновлению темы пользователя');
  }

}

export const getMyTheme = async (req: any, res: any) => {
  const { userId } = req.params;
  try {
    const theme = await UserTheme.findOne({
      where: { userId: userId },
    });
    const themeId: string = theme?.get('themeId') as string;
    const themeSite = await SiteTheme.findByPk(themeId)
    res.json(themeSite);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllThemeSite = async (_req: any, res: any) => {
  try {
    const theme = await SiteTheme.findAll({
      attributes: [
        "id",
        "theme",
        "description",
      ],
    });
    res.json(theme);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

