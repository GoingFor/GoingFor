/** IMPORTS */
import User from '../models/User.js';
import Event from '../models/Event.js';
import { errorHandler } from '../utils/error.js';
// import Listing from '../models/listing.model.js';

export const test = (req, res) => {
	res.json({
		message: 'Api route is working!',
	});
};

export const updateUser = async(req, res, next) => {
	try {
		const userId = req.user.id;
		const {fullname, username, email, phonenumber} = req.body;

		const user = await User.findById(userId);

		user.fullname = fullname || user.fullname;
		user.username = username || user.username;
		user.email = email || user.email;
		user.phonenumber = phonenumber || user.phonenumber;

		await user.save();
		// console.log(user);

		res.status(201).json({
			msg: 'Daten aktualisiert',
			data: user
		});


	} catch(err){
		console.log(err);
		next(err)
	}
}

// export const updateUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id)
//     return next(errorHandler(401, 'You can only update your own account!'));
//   try {
//     if (req.body.password) {
//       req.body.password = bcryptjs.hashSync(req.body.password, 10);
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: {
//           username: req.body.username,
//           email: req.body.email,
//           password: req.body.password,
//           avatar: req.body.avatar,
//         },
//       },
//       { new: true }
//     );

//     const { password, ...rest } = updatedUser._doc;

//     res.status(200).json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

export const deleteUser = async (req, res, next) => {
	if (req.user.id !== req.params.id)
		return next(errorHandler(401, 'You can only delete your own account!'));
	try {
		await User.findByIdAndDelete(req.params.id);
		res.clearCookie('access_token');
		res.status(200).json('User has been deleted!');
	} catch (error) {
		next(error);
	}
};

export const getUserListings = async (req, res, next) => {
	if (req.user.id === req.params.id) {
		try {
			const listings = await Listing.find({ userRef: req.params.id });
			res.status(200).json(listings);
		} catch (error) {
			next(error);
		}
	} else {
		return next(errorHandler(401, 'You can only view your own listings!'));
	}
};

export const getUser =  async(req, res, next) => {
	try {

		const userId = req.user.id;
		const user = await User.findById(userId).populate('likedEvents', '-_id');
		// .populate('likedEvents', '-_id')

		if(!user) {
			return next(errorHandler(404, 'User not found!'));
		}

		return res.json({
			user
		});

	} catch (error) {
		next(error);
	}
};

export const addEventToUser = async(req, res, next) => {
	try {
		const {event, user} = req.body;
		// const userId = req.userId;
		// const eventId = req.eventId;

		// prüfen ob in db
		const userData = await User.findById(user._id);
        const eventData = await Event.findById(event._id);
		// console.log('eventdata', eventData);
		// console.log('userdata', userData);


		// prüfen ob event schon geliked 
		const alreadyLikedEvent = await User.findOne({likedEvents: {$in: event._id}});
		if(alreadyLikedEvent) {
			return res.status(409).json({
				success: false,
				msg: 'Dir gefällt das Event bereits'
			});
		}

		userData.likedEvents.push(event._id);
		await userData.save();

		res.status(200).json({
            success: true,
            message: 'Dir gefällt nun das Event:',
            userData
        });

	} catch(error){
		next(error)
	}
}

